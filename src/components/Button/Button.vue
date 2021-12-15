<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 11:55:04
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\Button\Button.vue
 * @LastEditTime: 2021-12-15 12:58:44
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-button>
    {{ context.mainTitle }}
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'v-button',
  props: {
    context: {
      type: Object,
    },
  },
  setup(props) {
    // console.log('v-button-props', props)
    return { props }
  },
})
</script>

<style scoped lang="less">
.el-button {
  width: 60px;
  height: 60px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 189, 196);
}
.el-button:hover {
  background-color: rgb(0, 189, 196);
  color: #fff;
}

@media all and (max-width: 1024px) {
  .el-button {
    display: none;
  }
}
</style>
