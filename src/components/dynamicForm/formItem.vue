<!--
 * @Author: 龙际妙
 * @Date: 2021-12-10 17:30:00
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\dynamicForm\formItem.vue
 * @LastEditTime: 2021-12-15 16:59:06
 * @LastEditors: Please set LastEditors
-->
<template>
  <el-form-item :label="itemConfig.label" :prop="itemConfig.key">
    <!-- 输入框 -->
    <el-input v-if="itemConfig.type === 'input'" :placeholder="itemConfig.placeholder" v-model="virtualItem.value" @input="handleInput" />
    <el-input v-if="itemConfig.type === 'textarea'" type="textarea" :placeholder="itemConfig.placeholder" v-model="virtualItem.value" @input="handleInput" />
    <!-- 选择下拉框 -->
    <el-select v-if="itemConfig.type === 'select'" v-model="virtualItem.value" :placeholder="itemConfig.placeholder" @change="handleSelect">
      <el-option v-for="item in itemConfig.subType" :key="item.label" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <!-- 单选框 -->
    <el-radio-group v-if="itemConfig.type === 'radio'" v-model="virtualItem.value" @change="handleRadio">
      <template v-for="item in itemConfig.subType" :key="item.itemId">
        <el-radio :label="item.itemId" :title="'子段落' + item.itemId">
          <i
            @click="deletePartItem(item.itemId)"
            v-show="item.itemId == virtualItem.value"
            class="iconfont icon-shanchu1"
            :title="'删除子段落' + virtualItem.value"
            style="color: gray"
          ></i>
        </el-radio>
      </template>
      <i class="iconfont icon-roundaddfill" :title="'添加子段落' + itemConfig.subType.length" @click="addPartItem"></i>
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
      console.log('value', value)
      emit('myinput', { [props.itemConfig?.key]: value }) // emit改变part的值
    }
    const handleSelect = (value: string) => {
      emit('myselect', { [props.itemConfig?.key]: value })
    }

    const handleRadio = (value: number) => {
      console.log('handleRadio', value)
      emit('myradio', { [props.itemConfig?.key]: value })
    }

    // 删除子段落
    const deletePartItem = (itemId: number) => {
      console.log('itemId', itemId)
      emit('deleteItem', { itemId: itemId })
    }

    // 添加子段落
    const addPartItem = () => {
      console.log('addPartItem')
    }
    return { virtualItem, handleInput, handleSelect, handleRadio, deletePartItem, addPartItem }
  },
})
</script>

<style scoped lang="less">
.icon-shanchu1 {
  //绝对定位居中
  position: absolute;
  top: 50%;
  left: 105%;
  transform: translate(-50%, -50%);
}

.icon-roundaddfill {
  //绝对定位居中
  position: absolute;
  top: 55%;
  left: 105%;
  transform: translate(-50%, -50%);
  font-size: 22px;
}
.icon-roundaddfill:hover {
  cursor: pointer;
  color: #00aaff !important;
  // background-color: #00aaff;
}
</style>
