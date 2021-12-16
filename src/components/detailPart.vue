<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-17 03:11:11
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="section">
    <header class="section-header">
      <span class="section-title-l"></span>
      <!-- 段落标题 -->
      <h2 class="section-title">
        {{ part.mainTitle }}
        <span class="iconfont icon-shanchu1" :title="'删除' + part.mainTitle" @click="deletePart"></span>
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

      <template v-for="(item, index) in part.partItemList" :key="index">
        <div class="item">
          <header class="item-hd clearfix">
            <h4 class="item-name">{{ item.title }}</h4>
            <span class="item-time">{{ item.remark }}</span>
            <span v-html="item.btnHtml"></span>
            <i class="iconfont icon-link" v-show="item.title" @click="showAddQqDialog(part.id, item.itemId)"></i>
          </header>
          <!-- 二维码 -->
          <div class="item item-qr clearfix">
            <div class="item-qr-code">
              <img :src="item.qr_code" alt="" v-if="item.qr_img && item.qr_img !== ''" />
              <a class="qr-link" target="_blank" :href="item.code_href" v-if="item.code_href && item.code_href !== ''">开源链接</a>
              <a class="qr-link" target="_blank" :href="item.show_href" v-if="item.show_href && item.show_href !== ''">预览链接</a>
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
</template>

<script lang="ts">
import { defineComponent, h, reactive, toRefs } from 'vue'
import { part, partItem } from '../common/type/index'
import { ElMessageBox, ElMessage } from 'element-plus'
export default defineComponent({
  name: 'v-part',
  components: {},
  props: {
    part: {
      type: Object,
      require: true,
    },
  },
  setup(props, { emit }) {
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

    // 添加Qr
    const addQrForm = reactive({
      qr_img: 'sss',
      code_href: '',
      show_href: '',
    })
    const qrImgInput = (e: any) => {
      addQrForm.qr_img = e.target.value
      console.log('1', e.target.value)
    }

    const showAddQqDialog = (partId: number, itemId: number) => {
      console.log('partId', partId)
      console.log('itemId', itemId)
      // 打开弹窗

      ElMessageBox({
        title: '添加二维码',
        message: h('div', {}, [
          h('div', {}, [h('label', {}, '图片路径'), h('input', { value: addQrForm.qr_img, onInput: qrImgInput })]),
          h('div', {}, [
            h('label', {}, '源码路径'),
            h('input', { value: addQrForm.qr_img, onInput: ($event: InputEvent) => console.log('addQrForm.qr_img', ($event.target as any).value) }),
          ]),
          h('div', {}, [
            h('label', {}, '预览路径'),
            h('input', { value: addQrForm.qr_img, onInput: ($event: InputEvent) => console.log('addQrForm.qr_img', ($event.target as any).value) }),
          ]),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 50)
            }, 500)
          } else {
            done()
          }
        },
      }).then(() => {
        // 重置

        ElMessage({
          type: 'success',
          message: `重置成功!!`,
        })
      })
    }
    return { deletePart, showAddQqDialog, ...toRefs(addQrForm) }
  },
})
</script>

<style scoped lang="less"></style>
