<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-15 14:34:20
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="section">
    <header class="section-header">
      <span class="section-title-l"></span>
      <h2 class="section-title">
        {{ part.mainTitle }}
        <span class="iconfont icon-shanchu1" :title="'删除' + part.mainTitle" @click="deletePart"></span>
      </h2>

      <span class="section-title-r"></span>
    </header>

    <div class="section-body">
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
          </header>
          <main class="item-bd">
            <p class="section-content">
              <i class="iconfont icon-dot"></i>
              <span v-html="item.value"></span>
            </p>
          </main>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { part, partItem } from '../common/type/index'
export default defineComponent({
  name: 'v-part',
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
      return soure.slice(0, start) + newStr + soure.slice(start)
    }

    ;(props.part as part).partItemList?.map((item: partItem): void => {
      let tags = item.tags
      let value = item.value

      let str = new String(value)
      for (let i in tags) {
        let index: number = str.indexOf(i)
        str = insertStr(str as string, index, '<' + tags[i] + '>')
        str = insertStr(str as string, index + i.length + tags[i].length + 2, '</' + tags[i] + '>')
        item.value = str.toString()
      }
    })

    // 删除段落
    const deletePart = () => {
      console.log('props', props)
      console.log('compent', props.part?.id)
      emit('delete', props.part?.id)
    }
    return { deletePart }
  },
})
</script>

<style scoped lang="less"></style>
