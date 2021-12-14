<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 16:59:21
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\Form.vue
 * @LastEditTime: 2021-12-14 19:42:14
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form class="dynamic-form" :model="value" :label-width="formConfig.labelWidth" :size="formConfig.size" :label-position="formConfig.labelPosition">
    <dynamic-form-item
      v-for="item in formItemObserv"
      :key="childId + item.key"
      :itemConfig="item"
      @myinput="handleInput"
      @myselect="handleSelect"
      @myradio="handleRadio"
    >
    </dynamic-form-item>
  </el-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, Ref } from 'vue'
import dynamicFormItem from './formItem.vue'
import { formItemOption, formItemConfig, inputOption, radioOption } from '../../common/type/index'
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
      require: false,
    },
  },
  setup(props, { emit }) {
    // 复制partValue
    const virtualValue = reactive(JSON.parse(JSON.stringify(props.value)))
    // 复制formConfig
    const virtualConfig = reactive(JSON.parse(JSON.stringify(props.formConfig)))

    // 监听virtualItem的value属性
    const formItemObserv = computed({
      get() {
        return virtualConfig.formItemList
      },
      set(val: inputOption) {
        console.log('val', val)
        virtualConfig.formItemList[val.index][val.key] = val.value
        console.log('我在重新赋值')
        console.log('', virtualConfig)
      },
    })
    ///获取当前子段落下标
    const childId: Ref<number> = ref(virtualValue.childId)
    console.log('childId', childId)
    // 声明子段落
    let index: number
    let childSection = reactive([])
    try {
      // 循环给formItemList赋值传给formItem子组件
      virtualConfig.formItemList.forEach((item: formItemConfig, i: number) => {
        console.log('item', item)
        item.value = virtualValue[item.key]
        if (item.label === '段落') {
          //保存子段落
          childSection = reactive(JSON.parse(JSON.stringify(item.subType)))
          index = i
          // 抛出异常中断循环
          throw new Error('找到子段落了,不用再循环赋值了' + index)
        }
      })
    } catch (error) {
      // 找到当前子段落
      let curChildSeciton = childSection[childId.value]

      //重新循环
      for (let i = 5, j = 0; i < 9; i++, j++) {
        let item = virtualConfig.formItemList[i]
        item.value = curChildSeciton[item.key]
      }
    }

    // 除去HTML标签
    // const strReplace = (str: string | number | undefined) => {
    //   if (str !== '' && str) {
    //     let Str = new String(str)
    //     Str = Str.replaceAll(/<\/?[^>]+>/g, '')
    //     return Str
    //   } else {
    //     return ''
    //   }
    // }

    // Input
    const handleInput = (option: inputOption) => {
      console.log('option', option)
      let key: string = Object.keys(option)[0]
      let input = 'parent'
      props.formConfig.formItemList.forEach((item: inputOption) => {
        if (typeof item.subType === 'number' && item.key === key) {
          Object.assign(props.value?.partItemList[item.subType], option)
          input = 'child;'
        }
        if (typeof item.subType === 'string' && item.key === key) {
          item.value = option[key] as string
        }
      })
      if (input === 'parent') {
        emit('mychange', { ...props.value, ...option })
      }
    }

    const handleSelect = (option: formItemOption) => {
      emit('mychange', { ...props.value, ...option })
    }

    // 点击按钮切换段落
    const handleRadio = (option: radioOption) => {
      console.log(option)
      // 修改key让组件重新渲染
      childId.value = option.childId
      props.formConfig.formItemList.forEach((item: formItemConfig) => {
        if (typeof item.subType === 'number') {
          item.subType = option.childId
        }
      })

      // 找到当前子段落
      let curChildSeciton = childSection[childId.value]
      // 切换childId
      formItemObserv.value = {
        index: 4,
        key: 'value',
        value: childId.value,
      }
      // 重新循环
      for (let i = 5, j = 0; i < 9; i++, j++) {
        let item = virtualConfig.formItemList[i]
        let val = {
          index: i,
          key: 'value',
          value: curChildSeciton[item.key],
        }
        formItemObserv.value = val
      }

      emit('mychange', { ...props.value, ...option })
    }

    return { handleInput, handleSelect, handleRadio, formItemObserv, childId }
  },
})
</script>

<style scoped lang="less"></style>
