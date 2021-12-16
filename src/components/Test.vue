<!--
 * @Author: 龙际妙
 * @Date: 2021-12-16 15:47:08
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\Test.vue
 * @LastEditTime: 2021-12-16 15:49:04
 * @LastEditors: Please set LastEditors
-->
<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'test',
  setup() {
    return () => {
      return h('div', {}, 'sss')
    }
  },
})
</script>

<style scoped lang="less"></style>
