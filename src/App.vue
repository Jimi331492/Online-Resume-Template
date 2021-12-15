<!--
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description: 
 * @FilePath: \resume-ts-template\src\App.vue
 * @LastEditTime: 2021-12-16 04:08:05
 * @LastEditors: Please set LastEditors
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from './store'
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore(key)

    if (sessionStorage.getItem('store')) {
      store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store') as string)))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      console.log(store.state)
      sessionStorage.setItem('store', JSON.stringify(store.state))
    })
  },
})
</script>

<style scoped lang="less"></style>
