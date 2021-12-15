<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 16:59:21
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\Form.vue
 * @LastEditTime: 2021-12-15 19:40:59
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
      @deleteItem="handleDelteItem"
    >
    </dynamic-form-item>
  </el-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, Ref } from 'vue'
import dynamicFormItem from './formItem.vue'
import { formItemOption, formItemConfig, inputOption, radioOption, partItem, part } from '../../common/type/index'
import { ElMessage } from 'element-plus'
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
        virtualConfig.formItemList[val.index as number][val.key as string] = val.value
      },
    })
    ///获取当前子段落下标
    const childId: Ref<number> = ref(virtualValue.childId)
    console.log('childId', childId)
    // 声明子段落
    let index: number
    let childSection = reactive([])
    // 利用try-catch中断foreach循环
    try {
      // 循环给formItemList赋值传给formItem子组件
      virtualConfig.formItemList.forEach((item: formItemConfig, i: number) => {
        console.log('item', item)
        item.value = virtualValue[item.key]
        if (item.label === '段落') {
          //保存子段落
          childSection = reactive(JSON.parse(JSON.stringify(item.subType)))
          // console.log('childSection', childSection)
          index = i
          // 抛出异常中断循环
          throw new Error('找到子段落了,不用再循环赋值了' + index)
        }
      })
    } catch (error) {
      // 找到当前子段落
      let curChildSeciton = childSection[childId.value]
      if (curChildSeciton !== undefined) {
        // console.log('curChildSeciton', curChildSeciton)
        //重新循环
        for (let i = 5, j = 0; i < 9; i++, j++) {
          let item = virtualConfig.formItemList[i]
          item.value = curChildSeciton[item.key]
        }
      } else {
        console.log('error', error)
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

    // 承上启下的作用 接收子组件change事件改变表单，向上emit change事件改变视图
    const handleInput = (option: inputOption) => {
      console.log('option', option)
      // 拿到修改的key和value
      let key: string = Object.keys(option)[0]
      console.log('virtualValuebeFore', virtualValue)
      virtualConfig.formItemList.forEach((item: inputOption) => {
        // 修改的为子段落
        if (typeof item.subType === 'number' && item.key === key) {
          item.value = option[key] //给输入框赋值
          const itemId = item.subType
          // 找到当前下标
          const curIndex = virtualValue.partItemList.findIndex((e: partItem) => e.itemId === itemId)
          console.log('itemId', itemId)
          console.log('virtualValue', virtualValue)
          console.log('virtualValue', virtualConfig.formItemList)

          // 将修改保存
          virtualConfig.formItemList[4].subType[curIndex] = Object.assign(virtualValue.partItemList[curIndex], option) // 给模拟数据赋值，最后emit出去修改视图
        }
        // 修改的为段落
        if (typeof item.subType === 'string' && item.key === key) {
          item.value = option[key] //给输入框赋值

          Object.assign(virtualValue, option) // 给模拟数据赋值，最后emit出去修改视图
        }
      })
      console.log('virtualValue', virtualValue)
      emit('mychange', { ...virtualValue })
    }

    const handleSelect = (option: formItemOption) => {
      emit('mychange', { ...virtualValue, ...option })
    }

    //
    //
    // 点击按钮切换段落
    const handleRadio = (option: radioOption) => {
      console.log(option)
      // 修改key让组件重新渲染
      // 获取到当前子段落数组
      const subType: Array<partItem> = virtualConfig.formItemList[4].subType

      //根据传过来的itemId找到当前下标
      const curIndex = subType.findIndex((e) => e.itemId === option.childId)

      // 找到当前子段落
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const curChildSeciton: partItem | any = subType[curIndex]
      // const length = subType.length
      console.log('subType', subType)

      // 修改当前input表单项subType的值为当前子段落的id
      virtualConfig.formItemList.forEach((item: formItemConfig) => {
        if (typeof item.subType === 'number') {
          item.subType = option.childId
        }
      })

      // 改变childId 刷新组件
      childId.value = option.childId

      // 改变childId 刷新组件
      formItemObserv.value = {
        index: 4,
        key: 'value',
        value: option.childId,
      }

      // 重新循环
      for (let i = 5, j = 0; i < 9; i++, j++) {
        const item: formItemConfig = virtualConfig.formItemList[i]
        const val: inputOption = {
          index: i,
          key: 'value',
          value: curChildSeciton[item.key],
        }
        formItemObserv.value = val
      }
      //让视图持久化
      virtualValue.partItemList = subType
      emit('mychange', { ...virtualValue, ...option })
    }

    //删除子段落
    const handleDelteItem = (params: radioOption) => {
      // 获取到当前子段落数组和数组长度
      const subType: Array<partItem> = virtualConfig.formItemList[4].subType
      const length = subType.length
      let nextId: number
      if (length === 1) {
        return ElMessage.warning('删除失败')
      } else {
        //获取要删除的子段落Index和nextId
        const index = subType.findIndex((e) => e.itemId === params.itemId)
        //如果删除的子段落Index为最后一个
        if (index === length - 1) {
          nextId = subType[0].itemId
          console.log('1')
        } else {
          nextId = subType[index + 1].itemId
        }
        console.log('nextId', nextId)
        // 找到nextIndex
        const nextIndex = subType.findIndex((e) => e.itemId === nextId)
        // 找到下一个子段落
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nextChildSeciton: partItem | any = subType[nextIndex]
        console.log('nextChildSeciton', nextChildSeciton)

        virtualConfig.formItemList.forEach((item: formItemConfig) => {
          if (typeof item.subType === 'number') {
            item.subType = nextId
          }
        })
        // 将当前childId赋值为nextId
        childId.value = nextId
        // 给Radio组件赋值
        formItemObserv.value = {
          index: 4,
          key: 'value',
          value: childId.value,
        }

        console.log('deleteBefore', subType)

        console.log('index', index)

        // 删除更新表单选项组件
        subType.splice(index, 1)
        console.log('deleteAfter', subType)

        // 重新循环子段落更新输入框
        for (let i = 5, j = 0; i < 9; i++, j++) {
          let item = virtualConfig.formItemList[i]
          let val = {
            index: i,
            key: 'value',
            value: nextChildSeciton[item.key],
          }
          formItemObserv.value = val
        }

        // 修改虚假的值
        virtualValue.partItemList = subType

        //修改真实数据
        emit('mychange', { ...virtualValue })
      }
    }

    return { handleInput, handleSelect, handleRadio, formItemObserv, childId, handleDelteItem }
  },
})
</script>

<style scoped lang="less"></style>
