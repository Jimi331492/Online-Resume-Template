<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-11 16:08:13
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="section">
    <header class="section-header">
      <span class="section-title-l"></span>
      <h2 class="section-title">{{ title }}</h2>
      <span class="section-title-r"></span>
    </header>

    <div class="section-body">
      <header class="item-hd clearfix">
        <h3 class="item-name">{{ context.name }}</h3>
        <span class="item-time">{{ context.time }}</span>
        <span v-html="context.btn"></span>
      </header>
      <template v-for="(item, index) in infoList" :key="index">
        <div class="item">
          <header class="item-hd clearfix">
            <h4 class="item-name">{{ item.name }}</h4>
            <span class="item-time">{{ item.time }}</span>
            <span v-html="item.btn"></span>
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
export default defineComponent({
  name: 'v-part',
  props: {
    title: {
      type: String,
      require: true,
    },
    context: {
      type: Object,
      require: true,
    },
    infoList: {
      type: Array,
      require: true,
    },
  },
  setup(props) {
    // console.log('props', props.infoList)
    // 插入字符串
    function insertStr(soure: string, start: number, newStr: string): string {
      return soure.slice(0, start) + newStr + soure.slice(start)
    }
    // eslint-disable-next-line
    props.infoList?.map((item: any): void => {
      let tags = item.tags
      let value = item.value

      value = new String(value)
      for (let i in tags) {
        let index: number = value.indexOf(i)
        value = insertStr(value as string, index, '<' + tags[i] + '>')
        value = insertStr(value as string, index + i.length + tags[i].length + 2, '</' + tags[i] + '>')
        item.value = value
      }
    })
    return {}
  },
})
</script>

<style scoped lang="less"></style>
