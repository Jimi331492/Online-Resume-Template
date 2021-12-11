<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-12 03:58:54
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
  <el-drawer v-model="drawer" @open="openDrawerCb" :title="titles" :direction="direction" :before-close="handleClose">
    <dynamic-form :formConfig="contactFormConfig" :value="contactForm" @mychange="contactInput" v-if="titles === '联系方式'"></dynamic-form>
    <dynamic-form :formConfig="baseInfoFormConfig" :value="header.baseInfo" @mychange="baseInfoInput" v-if="titles === '基本信息'"></dynamic-form>
  </el-drawer>
  <!-- 按钮区域 -->
  <template v-for="(item, index) in buttonList" :key="index">
    <v-button :context="item" @click="openDrawer(item.title, item.direction)"></v-button>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
import vButton from '../components/Button/Button.vue'
import dynamicForm from '../components/dynamicForm/Form.vue'
import { baseInfo, contact, formItemOption } from '../common/type/index'
import { resumerHeader as header, baseInfoFormConfig, contactFormConfig, buttonList, experience, skillContext, skillList } from '../common/api/data'

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

    let formModel = reactive({})
    const contactForm = computed(() => formModel)
    //打开抽屉
    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawer.value = true
      direction.value = dir
    }
    // 打开抽屉cb
    const openDrawerCb = () => {
      if (titles.value === '联系方式') {
        let contactForm: formItemOption = {}
        formModel = new Object({ ...header.contact })

        for (const [key, val] of Object.entries(formModel)) {
          console.log(key, val)
          contactForm = {
            ...contactForm,
            [(val as contact).key]: (val as contact).href,
          }
        }
        formModel = reactive(contactForm)
        console.log('formModel', formModel)
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
      console.log('header.baseInfo', header.contact)

      const newContact = Object.entries(contactForm)

      header.contact.forEach((item: contact, i: number) => {
        console.log('newContact[i][1]', newContact[i][1])
        item.href = newContact[i][1]
        if (item.key === 'iPhone' || item.key === 'Email') {
          let index = newContact[i][1].indexOf(':')
          item.value = newContact[i][1].slice(index + 1)
        }
      })
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
      formModel,
      contactForm,
      openDrawer,
      openDrawerCb,
      handleClose,
      baseInfoInput,
      contactInput,
    }
  },
})
</script>

<style scoped lang="less"></style>
