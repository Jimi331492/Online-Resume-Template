<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-11 01:48:06
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
import { hdcontext, items as item } from '../common/type/index'
export default defineComponent({
  name: 'v-part',
  props: {
    title: {
      type: String,
      default: '专业技能',
    },
    context: {
      type: Object,
      default: (): hdcontext => {
        return {
          name: '',
          time: '',
          btn: '',
        }
      },
    },
    infoList: {
      type: Array,
      default: (): Array<item> => {
        return [
          {
            name: '',
            time: '',
            btn: '',
            value: '熟悉 HTML、CSS、JS、ES6',
            tags: {
              HTML: 'strong',
              CSS: 'strong',
              JS: 'strong',
              ES6: 'strong',
            },
          },
          {
            name: '',
            time: '',
            btn: '',
            value: '熟悉 Vue、ElmentUI、Webpack，能独立搭建博客',
            tags: {
              Vue: 'strong',
              ElmentUI: 'strong',
              Webpack: 'strong',
              搭建博客: 'em',
            },
          },
          {
            name: '',
            time: '',
            btn: '',
            value: '熟悉 Git、有良好的编程习惯,参与过团队开发',
            tags: {
              Git: 'strong',
              编程习惯: 'em',
              团队开发: 'em',
            },
          },
          {
            name: '',
            time: '',
            btn: '',
            value: '了解 Java、SpringBoot , 能实现简单CRUD接口',
            tags: {
              Java: 'strong',
              SpringBoot: 'SpringBoot',
              CRUD接口: 'em',
            },
          },
        ]
      },
    },
  },
  setup(props) {
    // console.log('props', props.infoList)
    // 插入字符串
    function insertStr(soure: string, start: number, newStr: string): string {
      return soure.slice(0, start) + newStr + soure.slice(start)
    }
    // eslint-disable-next-line
    props.infoList.map((item: any): void => {
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
