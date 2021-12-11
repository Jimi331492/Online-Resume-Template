<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-11 23:59:53
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <!-- 简历头部 -->
    <v-header :baseInfo="header.baseInfo" :contact="header.contact"></v-header>
    <div class="content-bd">
      <!-- 简历左部 -->
      <div class="content-left">
        <v-part title="专业技能" :context="skillContext" :infoList="skillList"></v-part>
        <v-part :title="experience.title" :context="experience.context" :infoList="experience.infoList"></v-part>
      </div>
      <!-- 简历右部 -->
      <div class="content-right"></div>
    </div>
  </div>
  <!-- 表单区域 -->
  <el-drawer v-model="drawer" :title="titles" :direction="direction" :before-close="handleClose">
    <dynamic-form :formConfig="baseInfoFormConfig" :value="header.baseInfo" @mychange="baseInfoInput" v-show="titles === '基本信息'"></dynamic-form>
    <dynamic-form :formConfig="contactFormConfig" :value="header.contact" @mychange="contactInput" v-show="titles === '联系方式'"></dynamic-form>
  </el-drawer>
  <!-- 按钮区域 -->
  <template v-for="(item, index) in buttonList" :key="index">
    <v-button :context="item" @click="openDrawer(item.title, item.direction)"></v-button>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
import vButton from '../components/Button/Button.vue'
import dynamicForm from '../components/dynamicForm/Form.vue'
import { baseInfo, contact, formItemOption } from '../common/type/index'
import { baseInfoFormConfig, contactFormConfig, buttonList, resumerHeader as header, experience, skillContext, skillList } from '../common/api/data'

export default defineComponent({
  components: {
    vHeader,
    vPart,
    vButton,
    'dynamic-form': dynamicForm,
  },
  setup() {
    //关于抽屉逻辑
    const drawer = ref(false)
    const titles = ref()
    const direction = ref() //抽屉打开方向

    //打开抽屉的回调
    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawer.value = true
      direction.value = dir
      if (title === '联系方式') {
        let contactForm: formItemOption = {}
        header.contact.map((item: contact) => {
          let key = item.label
          let value = item.href
          contactForm = {
            ...contactForm,
            [key]: value,
          }
        })
        ;(header.contact as unknown) = contactForm
        console.log('headerForm.contact', header.contact)
      }
    }

    // 基本信息表单绑定
    const baseInfoInput = (e: baseInfo) => {
      console.log('index', e)
      header.baseInfo = reactive(e)
    }

    // 联系方式表单绑定
    const contactInput = (contactForm: formItemOption) => {
      console.log('contactForm', contactForm)
      // header.contact = reactive(e)
    }

    // 抽屉关闭的回调
    const handleClose = (done: FunctionConstructor) => {
      done()
    }

    return {
      drawer,
      titles,
      buttonList,
      baseInfoFormConfig,
      contactFormConfig,
      header,
      direction,
      skillContext,
      skillList,
      experience,
      openDrawer,
      handleClose,
      baseInfoInput,
      contactInput,
    }
  },
})
</script>

<style scoped lang="less"></style>
