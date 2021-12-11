<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 11:55:04
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\Button.vue
 * @LastEditTime: 2021-12-11 01:49:02
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-backtop :bottom="context.bottom" :visibility-height="0">
    {{ context.title }}
  </el-backtop>
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
.el-backtop {
  width: 60px;
  height: 60px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  font-size: 12px;
}
@media all and (max-width: 1024px) {
  .el-backtop {
    display: none;
  }
}
</style>
