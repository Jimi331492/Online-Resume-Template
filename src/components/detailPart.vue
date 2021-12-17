<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-17 15:25:13
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="section">
    <header class="section-header">
      <span class="section-title-l"></span>
      <!-- 段落标题 -->
      <h2 class="section-title">
        {{ part.mainTitle }}
        <span class="iconfont icon-delete-fill" :title="'删除' + virturlPart.mainTitle" @click="deletePart"></span>
      </h2>
      <span class="section-title-r"></span>
    </header>

    <div class="section-body">
      <!-- 副标题 -->
      <header class="item-hd clearfix">
        <h3 class="item-name">{{ virturlPart.subTitle }}</h3>
        <span class="item-time">{{ virturlPart.subRemark }}</span>
        <span v-html="virturlPart.subBtnHtml"></span>
      </header>

      <template v-for="item in virturlPart.partItemList" :key="item.itemId">
        <div class="item">
          <header class="item-hd clearfix">
            <h4 class="item-name">{{ item.title }}</h4>
            <span class="item-time">{{ item.remark }}</span>
            <span v-html="item.btnHtml"></span>
            <!-- 添加二维码 -->
            <i
              class="iconfont icon-add-link"
              title="添加(二维码/链接)"
              v-show="item.title && !(item.qr_img && item.qr_img !== '')"
              @click="showAddQqDialog(virturlPart.id, item.itemId)"
            ></i>
          </header>
          <!-- 二维码 -->
          <div class="item item-qr clearfix">
            <div class="item-qr-code">
              <img :src="item.qr_img" alt="" v-if="item.qr_img && item.qr_img !== ''" />
              <a
                :class="item.qr_img && item.qr_img !== '' ? 'qr-link' : 'qr-link-no-img'"
                target="_blank"
                :href="item.code_href"
                v-if="item.code_href && item.code_href !== ''"
                >开源链接</a
              >
              <a
                :class="item.qr_img && item.qr_img !== '' ? 'qr-link' : 'qr-link-no-img'"
                target="_blank"
                :href="item.show_href"
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
  <el-dialog v-model="linkDialogVisible" :title="titles" :lock-scroll="false">
    <dynamic-form :formConfig="linkFormConfig" :value="addLinkForm" @mychange="linkInput"></dynamic-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="linkDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addLink">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { part, partItem } from '../common/type/index'
import { linkFormConfig } from '../common/api/data'
import dynamicForm from './dynamicForm/Form.vue'
export default defineComponent({
  name: 'v-part',
  components: {
    'dynamic-form': dynamicForm,
  },
  emits: ['delete'],
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
      console.log('soure', soure)
      console.log('start', start)
      console.log('newStr', newStr)
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
      console.log('props', props)
      console.log('compent', props.part?.id)
      emit('delete', props.part?.id)
    }

    //
    const linkDialogVisible = ref(false)
    const titles = ref('')
    const addLinkForm: any = reactive({
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
      const curItemIndex = virturlPart.partItemList.findIndex((e: partItem) => {
        return e.itemId === itemId
      })
      titles.value = virturlPart.partItemList[curItemIndex].title
      addLinkForm.partId = partId
      addLinkForm.itemId = itemId
      console.log('addLinkForm', addLinkForm)
      linkDialogVisible.value = true
    }

    const linkInput = (part: part) => {
      console.log('part', part)
      Object.assign(addLinkForm, part)
      console.log('addLinkForm', addLinkForm)
    }
    const addLink = () => {
      console.log('form', addLinkForm)
      const curItemIndex = virturlPart.partItemList.findIndex((e: partItem) => {
        return e.itemId === addLinkForm.itemId
      })
      Object.assign(virturlPart.partItemList[curItemIndex], addLinkForm)
      console.log('virturlPart', virturlPart.value)
      addLinkForm.value = {
        partId: 0,
        itemId: 0,
        qr_img: '',
        show_href: '',
        code_href: '',
      }
      linkDialogVisible.value = false
    }
    return { deletePart, showAddQqDialog, virturlPart, linkFormConfig, linkDialogVisible, titles, addLinkForm, addLink, linkInput }
  },
})
</script>

<style scoped lang="less"></style>
