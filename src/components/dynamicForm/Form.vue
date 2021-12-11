<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 16:59:21
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\Form.vue
 * @LastEditTime: 2021-12-11 03:30:52
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form
    class="dynamic-form"
    :inline="formConfig.inline"
    :model="value"
    :label-width="formConfig.labelWidth"
    :size="formConfig.size"
    :status-icon="formConfig.statusIcon"
    :label-position="formConfig.labelPosition"
  >
    <dynamic-form-item v-for="item in formConfig.formItemList" :key="item.key" :itemConfig="item" :value="value[item.key]" @input="handleInput(item.key)">
    </dynamic-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import dynamicFormItem from './formItem.vue'
import { formItemConfig } from '../../common/type/index'
// 注册表单配置项

export default defineComponent({
  name: 'dynamicForm',
  components: {
    'dynamic-form-item': dynamicFormItem,
  },
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      require: true,
    },
  },
  setup(props, { emit }) {
    console.log('props', props)
    const setDefaultValue = () => {
      console.log('props', props)
      const formData = { ...props.value }
      console.log('formData', formData)
      // 设置默认值
      props.formConfig.formItemList.forEach((item: formItemConfig) => {
        if (formData[item.key] === undefined || formData[item.key] === null) {
          formData[item.key] = item.value
        }
      })
      emit('input', formData)
    }
    const handleInput = (key: string) => {
      console.log('event', event)
      console.log('value', (event?.target as HTMLInputElement).value)

      emit('input', { ...props.value, [key]: (event?.target as HTMLInputElement).value })
    }
    onMounted(() => {
      setDefaultValue()
    })
    return { setDefaultValue, handleInput }
  },
})
</script>

<style scoped lang="less"></style>
