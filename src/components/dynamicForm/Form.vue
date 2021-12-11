<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 16:59:21
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\Form.vue
 * @LastEditTime: 2021-12-11 18:07:04
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
    <!-- <dynamic-form-item v-for="item in formConfig.formItemList" :key="item.key" :itemConfig="item" :value="value[item.key]" @input="handleInput(item.key)">
    </dynamic-form-item> -->
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
import { sex } from '../../common/type/index'
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

    const handleInput = (option: any) => {
      console.log('form-key', option)
      emit('mychange', { ...props.value, ...option })
    }
    const handleSelect = (option: sex) => {
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
