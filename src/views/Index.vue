<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-14 18:57:13
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <!-- 简历头部 -->
    <v-header :baseInfo="header.baseInfo" :contact="header.contact"></v-header>
    <div class="content-bd">
      <!-- 简历左部 -->
      <div class="content-left">
        <template v-for="item in partList" :key="item.id">
          <v-part :part="item"></v-part>
        </template>
      </div>
      <!-- 简历右部 -->
      <div class="content-right"></div>
    </div>
  </div>

  <!-- 抽屉区域 -->
  <el-drawer v-model="drawerVisble" :title="titles" :direction="direction" :before-close="handleClose">
    <dynamic-form :formConfig="baseInfoFormConfig" :value="header.baseInfo" @mychange="baseInfoInput" v-if="titles === '基本信息'"></dynamic-form>
    <dynamic-form :formConfig="contactFormConfig" :value="contactForm" @mychange="contactInput" v-if="titles === '联系方式'"></dynamic-form>
  </el-drawer>

  <!-- 弹窗区域 -->
  <el-dialog v-model="dialogVisble" :title="titles" :lock-scroll="false">
    <template v-for="(item, index) in partList" :key="index">
      <dynamic-form :formConfig="partFormConfig" :value="item" @mychange="partInput" ref="partRef" v-if="item.id === partId"></dynamic-form>
    </template>
  </el-dialog>

  <!-- 按钮区域 -->
  <template v-for="(item, index) in drawerList" :key="index">
    <v-button :context="item" @click="openDrawer(item.title, item.direction)"></v-button>
  </template>
  <template class="dialog-btn" v-for="(item, index) in dialogList" :key="index">
    <v-button :context="item" @click="openDialog(item.title, item.id)"></v-button>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref, computed } from 'vue'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
import vButton from '../components/Button/Button.vue'
import dynamicForm from '../components/dynamicForm/Form.vue'
import { baseInfo, contact, formItemOption, part } from '../common/type/index'
import { resumerHeader as header, baseInfoFormConfig, contactFormConfig, partFormConfig, drawerList, dialogList, partList } from '../common/api/data'

export default defineComponent({
  components: {
    vHeader,
    vPart,
    vButton,
    'dynamic-form': dynamicForm,
  },
  setup() {
    //关于抽屉逻辑
    const drawerVisble = ref(false)
    const dialogVisble = ref(false)
    const titles = ref()
    const partId = ref()
    const direction = ref() //抽屉打开方向
    const partRef: Ref = ref(null)

    let formModel = reactive({})
    // 格式化contactForm
    let contactForm = computed(() => {
      let form: formItemOption = {}

      for (let i in header.contact) {
        form = {
          ...form,
          [header.contact[i].key]: header.contact[i].href,
        }
      }
      formModel = reactive(form)

      return formModel
    })

    //打开抽屉
    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawerVisble.value = true
      direction.value = dir
    }

    //打开弹窗
    const openDialog = (title: string, id: number): void => {
      titles.value = title
      partId.value = id
      partFormConfig.formItemList[4].subType = reactive(partList[id].partItemList)

      dialogVisble.value = true
    }

    // 基本信息表单绑定
    const baseInfoInput = (e: baseInfo) => {
      Object.assign(header.baseInfo, e)
    }

    // 联系方式表单绑定
    const contactInput = (form: formItemOption) => {
      const newContact = Object.entries(form)

      header.contact.forEach((item: contact, i: number) => {
        item.href = newContact[i][1]
        item.value = item.key === 'iPhone' || item.key === 'Email' ? newContact[i][1].slice(newContact[i][1].indexOf(':') + 1) : ''
      })
    }

    const partInput = (part: part) => {
      // 给描述添加按钮样式
      if (part.subBtnHtml !== '' && part.subBtnHtml && part.subBtnHtml.slice(0, 2) !== '<a' && part.subBtnHtml.slice(-4) !== '</a>') {
        part.subBtnHtml = `<a class="btn item-more" href="" target="_blank" title="${part.mainTitle}">${part.subBtnHtml}</a>`
      }
      //??//给段落描述和段落内容添加按钮和强调样式

      // 修改virtualPartList
      Object.assign(partList[part.id], part)
    }

    // 抽屉关闭的回调
    const handleClose = (done: FunctionConstructor) => {
      done()
    }

    return {
      drawerVisble,
      dialogVisble,
      titles,
      partId,
      drawerList,
      dialogList,
      baseInfoFormConfig,
      contactFormConfig,
      partFormConfig,
      header,
      direction,
      partRef,
      formModel,
      contactForm,
      openDrawer,
      openDialog,
      handleClose,
      baseInfoInput,
      contactInput,
      partInput,
      partList,
    }
  },
})
</script>

<style scoped lang="less"></style>
