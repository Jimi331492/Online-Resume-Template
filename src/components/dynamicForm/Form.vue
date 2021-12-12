<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 16:59:21
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\Form.vue
 * @LastEditTime: 2021-12-12 18:56:47
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form class="dynamic-form" :model="value" :label-width="formConfig.labelWidth" :size="formConfig.size" :label-position="formConfig.labelPosition">
    <dynamic-form-item
      v-for="item in formConfig.formItemList"
      :key="item.key"
      :itemConfig="item"
      :value="value[item.key]"
      @myinput="handleInput"
      @myselect="handleSelect"
    >
    </dynamic-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import dynamicFormItem from './formItem.vue'
import { formItemOption } from '../../common/type/index'
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
    const handleInput = (option: formItemOption) => {
      // console.log('inputOption', option)
      emit('mychange', { ...props.value, ...option })
    }
    const handleSelect = (option: formItemOption) => {
      // console.log('selectOption', option)
      emit('mychange', { ...props.value, ...option })
    }
    onMounted(() => {
      // setDefaultValue()
    })
    return { handleInput, handleSelect }
  },
})
</script>

<style scoped lang="less"></style>
