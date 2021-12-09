<!--
 * @Author: 龙际妙
 * @Date: 2021-12-09 03:36:29
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\detailPart.vue
 * @LastEditTime: 2021-12-09 03:47:49
 * @LastEditors: Please set LastEditors
-->
<template>
  <section id="skill">
    <header class="section-header">
      <span class="section-title-l"></span>
      <h2 class="section-title">专业技能</h2>
      <span class="section-title-r"></span>
    </header>

    <div class="section-body">
      <div class="item">
        <header class="item-hd clearfix">
          <h3 class="item-name"></h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            熟悉<strong>HTML</strong>、<strong>CSS</strong>、<strong>JS</strong>、<strong>AJAX</strong>、<strong>ES6</strong>
          </p>

          <p />
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix"></header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            熟悉
            <strong>Bootstrap</strong>、<strong>Jquery</strong>，能维护该技术栈项目
          </p>
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix"></header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            熟悉
            <strong>Vue</strong>、<strong>ElmentUI</strong>、<strong>Webpack</strong>，能独立<em>搭建博客</em>
          </p>
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix">
          <h3 class="item-name"></h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            了解
            <strong>Node</strong>、<strong>Express</strong>、<strong>Koa</strong>、<strong>Egg</strong>，能简单<em>实现接口</em>
          </p>
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix">
          <h3 class="item-name"></h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            了解
            <strong>Linux </strong>命令、<strong>Nginx</strong>，能简单<em>部署服务端</em>
          </p>
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix">
          <h3 class="item-name"></h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            了解
            <strong>Git</strong>、<strong>TypeScript</strong>，参与过<em>团队开发</em>
          </p>
        </div>
      </div>

      <div class="item">
        <header class="item-hd clearfix">
          <h3 class="item-name"></h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            <i class="iconfont icon-dot"></i>
            了解数据结构、算法和计算机网络
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'detailPart',
  props: {
    title: {
      type: String,
      default: '细节模块',
    },
    context: {
      type: Object,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
