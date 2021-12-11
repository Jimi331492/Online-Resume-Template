<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 17:30:00
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\formItem.vue
 * @LastEditTime: 2021-12-11 03:41:46
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form-item :label="itemConfig.label" :prop="itemConfig.key">
    <el-input v-if="itemConfig.type === 'input'" v-bind="$attrs" :placeholder="itemConfig.placeholder" v-model="value" @input="handleInput(itemConfig.key)" />
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'dynamicFormItem',
  props: {
    itemConfig: {
      type: Object,
      require: true,
    },
  },
  setup(props, { attrs, emit }) {
    console.log('attrs', attrs)
    let value = ref(attrs.value)
    const handleInput = (key: string) => {
      console.log('event', event)
      console.log('value', (event?.target as HTMLInputElement).value)

      emit('input', { [key]: (event?.target as HTMLInputElement).value })
    }
    return { value, handleInput }
  },
})
</script>

<style scoped lang="less"></style>
