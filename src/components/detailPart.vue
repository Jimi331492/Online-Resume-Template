<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-18 19:27:22
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="section">
    <header class="section-header">
      <span class="section-title-l"></span>
      <!-- 段落标题 -->
      <h2 class="section-title">
        {{ part.mainTitle }}
        <span class="iconfont icon-delete-fill" :title="'删除' + part.mainTitle" @click="deletePart"></span>
      </h2>
      <span class="section-title-r"></span>
    </header>

    <div class="section-body">
      <!-- 副标题 -->
      <header class="item-hd clearfix">
        <h3 class="item-name">{{ part.subTitle }}</h3>
        <span class="item-time">{{ part.subRemark }}</span>
        <span v-html="part.subBtnHtml"></span>
      </header>

      <template v-for="item in part.partItemList" :key="item.itemId">
        <div class="item">
          <header class="item-hd clearfix">
            <h4 class="item-name">{{ item.title }}</h4>
            <span
              class="item-time"
              v-show="(!item.qr_img || item.qr_img === '') && (!item.code_href || item.code_href === '') && (!item.show_href || item.show_href === '')"
              >{{ item.remark }}</span
            >
            <span v-html="item.btnHtml"></span>
            <!-- 添加二维码 -->
            <i
              :class="`iconfont icon-add-link ${
                item.title && (!item.qr_img || item.qr_img === '') && (!item.code_href || item.code_href === '') && (!item.show_href || item.show_href === '')
                  ? ''
                  : 'hide'
              }`"
              title="添加(二维码/链接)"
              @click="showAddQqDialog(virturlPart.id, item.itemId)"
            ></i>
          </header>
          <!-- v-show="item.title && !(item.qr_img && item.qr_img !== '')" -->
          <!-- 二维码 -->
          <div class="item item-qr clearfix">
            <div class="item-qr-code">
              <img :src="item.qr_img" alt="" v-if="item.qr_img && item.qr_img !== ''" />
              <a
                :class="item.qr_img && item.qr_img !== '' ? 'qr-link' : 'qr-link-no-img'"
                target="_blank"
                :href="item.code_href"
                :title="item.title"
                v-if="item.code_href && item.code_href !== ''"
                >开源链接</a
              >
              <a
                :class="item.qr_img && item.qr_img !== '' ? 'qr-link' : 'qr-link-no-img'"
                target="_blank"
                :href="item.show_href"
                :title="`点击预览${item.title}`"
                v-if="item.show_href && item.show_href !== ''"
                >预览链接</a
              >
              <!-- <a class="qr-link" target="_blank" :href="item.code_href" v-if="item.code_href && item.code_href !== ''">开源链接</a>
              <a class="qr-link" target="_blank" :href="item.show_href" v-if="item.show_href && item.show_href !== ''">预览链接</a> -->
            </div>
          </div>
          <main class="item-bd">
            <p class="section-content">
              <i class="iconfont icon-dot"></i>
              <span v-html="item.value"></span>
              <!-- 子段落内容带的链接 -->
              <a class="item-link" :href="item.href" target="_blank" :title="item.hrefTitle" v-if="item.href !== '' && item.href">
                <i class="iconfont icon-link"></i>
              </a>
            </p>
          </main>
        </div>
      </template>
    </div>
  </section>

  <!-- 弹窗区域 -->
  <el-dialog v-model="linkDialogVisible" :title="titles" :lock-scroll="false" @close="closeAddDialog">
    <dynamic-form :formConfig="linkFormConfig" :value="addLinkForm" :key="addFormKey" @mychange="linkInput"></dynamic-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="linkDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addLink">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from 'vue'
import { part, partItem, inputOption } from '../common/type/index'
import { linkFormConfig } from '../common/api/data'
import dynamicForm from './dynamicForm/Form.vue'
export default defineComponent({
  name: 'v-part',
  components: {
    'dynamic-form': dynamicForm,
  },
  emits: ['delete', 'addLink'],
  props: {
    part: {
      type: Object,
      require: true,
    },
  },
  setup(props, { emit }) {
    // 拷贝props.part
    const virturlPart = reactive({ ...props.part })

    // console.log('props', props.infoList)
    // 插入字符串
    function insertStr(soure: string, start: number, newStr: string): string {
      return soure.slice(0, start) + newStr + soure.slice(start)
    }

    ;(props.part as part).partItemList?.map((item: partItem): void => {
      let tags = item.tags
      let value = item.value

      let str = new String(value)
      // 没有标签打标签
      if (!/<\/?[^>]+>/g.test(value)) {
        for (let i in tags) {
          let index: number = str.indexOf(i)
          str = insertStr(str as string, index, '<' + tags[i] + '>')
          str = insertStr(str as string, index + i.length + tags[i].length + 2, '</' + tags[i] + '>')
          item.value = str.toString()
        }
      }
    })

    // 删除段落
    const deletePart = () => {
      emit('delete', props.part?.id)
    }

    //
    const linkDialogVisible = ref(false)
    const titles = ref('')
    let addLinkForm: inputOption = reactive({
      partId: 0,
      itemId: 0,
      qr_img: '',
      show_href: '',
      code_href: '',
    })
    const showAddQqDialog = (partId: number, itemId: number) => {
      console.log('partId', partId)
      console.log('itemId', itemId)
      // 打开弹窗
      const curItemIndex = props.part?.partItemList.findIndex((e: partItem) => {
        return e.itemId === itemId
      })
      titles.value = virturlPart.partItemList[curItemIndex].title
      addLinkForm.partId = partId
      addLinkForm.itemId = itemId
      console.log('addLinkForm', addLinkForm)
      linkDialogVisible.value = true
    }

    const linkInput = (part: inputOption) => {
      console.log('part', part)
      part.itemId = addLinkForm.itemId
      part.partId = addLinkForm.partId
      console.log('addLinkForm', addLinkForm)
      addLinkForm = Object.assign({}, addLinkForm, part)
      console.log('Object.assign(addLinkForm, part)', addLinkForm)
    }
    const addLink = () => {
      console.log('addLinkForm', addLinkForm)
      const curItemIndex = props.part?.partItemList.findIndex((e: partItem) => {
        return e.itemId === addLinkForm.itemId
      })
      console.log('curItemIndex', curItemIndex)
      console.log('props.part?.partItemList[curItemIndex]', props.part?.partItemList[curItemIndex])
      Object.assign(props.part?.partItemList[curItemIndex], addLinkForm)
      console.log('virturlPart', virturlPart)
      console.log(' Object.assign(props.part?.partItemList[curItemIndex], addLinkForm)', props.part?.partItemList[curItemIndex])
      emit('addLink')

      linkDialogVisible.value = false
    }
    //刷新组件
    let addFormKey: Ref<number> = ref(new Date().valueOf()) //初始化key

    const closeAddDialog = () => {
      addFormKey.value = new Date().valueOf()
      addLinkForm = {
        partId: 0,
        itemId: 0,
        qr_img: '',
        show_href: '',
        code_href: '',
      }
    }

    return { deletePart, showAddQqDialog, closeAddDialog, addFormKey, virturlPart, linkFormConfig, linkDialogVisible, titles, addLinkForm, addLink, linkInput }
  },
})
</script>

<style scoped lang="less">
.icon-delete-fill {
  //绝对定位居中
  position: absolute;
  top: 48%;
  left: 88%;
  transform: translate(-50%, -50%);
}
.icon-delete-fill:hover {
  cursor: pointer;
  color: #00b3fa !important;
}
</style>
