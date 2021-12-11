<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 17:30:00
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\formItem.vue
 * @LastEditTime: 2021-12-11 17:56:42
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form-item :label="itemConfig.label" :prop="itemConfig.key">
    <!-- <el-input v-if="itemConfig.type === 'input'" v-bind="$attrs" :placeholder="itemConfig.placeholder" v-model="value" @input="handleInput(itemConfig.key)" /> -->
    <el-input v-if="itemConfig.type === 'input'" :placeholder="itemConfig.placeholder" v-model="value" @input="handleInput" />
    <el-select v-if="itemConfig.type === 'select'" v-model="value" :placeholder="itemConfig.placeholder" @change="handleSelect">
      <el-option v-for="item in itemConfig.subType" :key="item.label" :label="item.label" :value="item.value"> </el-option>
    </el-select>
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
    let value = ref(attrs.value)
    console.log('formitem-input', value)
    const handleInput = (value: string) => {
      console.log('formitem-input', value)
      emit('myinput', { [props.itemConfig?.key]: value })
    }
    const handleSelect = (value: string) => {
      console.log('formitem-select', value)

      emit('myselect', { [props.itemConfig?.key]: value })
    }
    return { value, handleInput, handleSelect }
  },
})
</script>

<style scoped lang="less"></style>
