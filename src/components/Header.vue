<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 15:12:18
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\Header.vue
 * @LastEditTime: 2021-12-16 22:14:34
 * @LastEditors: Please set LastEditors
-->
<template>
  <header :class="`content-hd gradient_${theme}`">
    <section class="title clearfix">
      <!-- 姓名 -->
      <div class="name">
        <h1>
          {{ baseInfo.name }}
          <small> {{ baseInfo.E_name }}</small>
        </h1>
      </div>
      <div class="job">
        <h2>{{ baseInfo.job }}</h2>
        <div class="avartor">
          <input type="file" class="file-input" d="file" name="file" title="选择头像" accept="image/*" ref="input" @change="chooseAva($event)" />
          <div class="file-icon"><span>选择头像</span></div>
          <img src="https://cdn.jsdelivr.net/gh/Jimi331492/cdn@1.2/img/custom/avatar.jpg" alt="" class="file-img" ref="avaImg" />
        </div>
      </div>
    </section>

    <div class="clearfix">
      <!-- 基本信息+教育信息 -->
      <section class="info">
        <h3>
          {{ baseInfo.sex }} <span v-show="baseInfo.sex !== '' && baseInfo.birth !== ''">/</span> {{ baseInfo.birth }}
          <span v-show="baseInfo.hometown !== '' && baseInfo.birth !== ''">/</span>
          {{ baseInfo.hometown }}
        </h3>
        <h3>{{ baseInfo.edu }} <span v-show="baseInfo.edu !== '' && baseInfo.edu_time !== ''">/</span> {{ baseInfo.edu_time }}</h3>

        <p>
          <a target="_blank" :href="baseInfo.school_url" :title="baseInfo.school_url"> {{ baseInfo.school }} </a
          ><span v-show="baseInfo.school !== '' && baseInfo.subject !== ''">/</span>
          {{ baseInfo.subject }}
        </p>
      </section>
      <!-- 联系方式 -->
      <section class="contact">
        <ul>
          <li v-for="item in contact" :key="item.key">
            <a :href="item.href" target="_blank" v-show="item.href !== ''">
              <span :title="item.href" v-if="item.value === ''">{{ item.key }}</span>
              <span :title="item.href" v-else>{{ item.value }}</span>
              <i :class="'iconfont ' + item.icon"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
export default defineComponent({
  name: 'v-header',
  props: {
    baseInfo: {
      type: Object,
    },
    contact: {
      type: Array,
    },
  },
  /* eslint-disable */
  setup(props) {
    // 切换主题
    const store = useStore(key)
    console.log('store', store.state)
    const theme = computed(() => {
      return store.state.themeIndex
    })
    console.log('themeIndex', theme.value)

    // console.log('props', props)
    let base: Ref = ref()
    const avaImg: Ref = ref(null)

    let chooseAva = (e: Event) => {
      console.log('e', e)
      let files: FileList = (e.target as HTMLInputElement).files as FileList
      let file: File | Blob = files[0]
      // console.log('file', file)
      //未选中图片 直接返回
      if (files.length === 0) return
      //生成一个文件读取器
      const reader = new FileReader()

      // 转换为Base64
      reader.readAsDataURL(file)

      // 读取完成回调函数
      reader.onload = () => {
        // 保存base结果，生成响应式数据
        base = ref(reader.result)

        const value: HTMLImageElement = avaImg.value
        // 设置src
        value.setAttribute('src', base.value)
      }
    }

    return { chooseAva, avaImg, theme }
  },
})
</script>

<style lang="less" scoped></style>
