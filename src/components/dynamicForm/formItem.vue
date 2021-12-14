<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 17:30:00
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\formItem.vue
 * @LastEditTime: 2021-12-14 19:22:43
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form-item :label="itemConfig.label" :prop="itemConfig.key">
    <!-- 输入框 -->
    <el-input v-if="itemConfig.type === 'input'" :placeholder="itemConfig.placeholder" v-model="virtualItem.value" @input="handleInput" />
    <!-- 选择下拉框 -->
    <el-select v-if="itemConfig.type === 'select'" v-model="virtualItem.value" :placeholder="itemConfig.placeholder" @change="handleSelect">
      <el-option v-for="item in itemConfig.subType" :key="item.label" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <!-- 单选框 -->
    <el-radio-group v-if="itemConfig.type === 'radio'" v-model="virtualItem.value" @change="handleRadio">
      <template v-for="item in itemConfig.subType" :key="item.itemId">
        <el-radio :label="item.itemId"></el-radio>
      </template>
    </el-radio-group>
  </el-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'dynamicFormItem',
  props: {
    itemConfig: {
      type: Object,
      require: true,
    },
  },
  setup(props, { emit }) {
    // 复制一个itemConfig
    let virtualItem = reactive(JSON.parse(JSON.stringify(props.itemConfig)))
    // 监听virtualItem的value属性
    const virtualValue = computed({
      get() {
        return virtualItem.value
      },
      set(val: string) {
        virtualItem.value = val
        console.log('form-item-set_val', virtualItem.value)
      },
    })

    const handleInput = (value: string) => {
      virtualValue.value = value // 改变输入框里的值
      emit('myinput', { [props.itemConfig?.key]: value }) // emit改变part的值
    }
    const handleSelect = (value: string) => {
      emit('myselect', { [props.itemConfig?.key]: value })
    }

    const handleRadio = (value: number) => {
      console.log('handleRadio', value)
      emit('myradio', { [props.itemConfig?.key]: value })
    }
    return { virtualItem, handleInput, handleSelect, handleRadio }
  },
})
</script>

<style scoped lang="less"></style>
