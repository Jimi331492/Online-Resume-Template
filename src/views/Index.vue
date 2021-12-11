<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-11 18:11:47
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <!-- 简历头部 -->
    <v-header :baseInfo="headerForm.baseInfo" :contact="headerForm.contact"></v-header>
    <div class="content-bd">
      <!-- 简历左部内容 -->
      <div class="content-left">
        <v-part title="专业技能" :context="skillContext" :infoList="skillList"></v-part>
        <v-part :title="experience.title" :context="experience.context" :infoList="experience.infoList"></v-part>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
  <!-- 弹窗区域 -->
  <el-drawer v-model="drawer" :title="titles" :direction="direction" :before-close="handleClose">
    <dynamic-form :formConfig="baseInfoFormConfig" :value="headerForm.baseInfo" @mychange="baseInfoInput" v-show="titles === '基本信息'"></dynamic-form>
    <dynamic-form :formConfig="contactFormConfig" :value="headerForm.contact" @mychange="contactInput" v-show="titles === '联系方式'"></dynamic-form>
    <!-- <dynamic-form :formConfig="formConfig" :value="headerForm.contact" @mychange="itemInput" v-show="titles === '专业技能'"></dynamic-form>
    <dynamic-form :formConfig="formConfig" :value="headerForm.contact" @mychange="itemInput" v-show="titles === '实习经历'"></dynamic-form> -->
  </el-drawer>

  <template v-for="(item, index) in buttonList" :key="index">
    <v-button :context="item" @click="openDrawer(item.title, item.direction)"></v-button>
  </template>
  <!-- <v-button @click="addPart"></v-button> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
import vButton from '../components/Button.vue'
import dynamicForm from '../components/dynamicForm/Form.vue'
import { baseInfo } from '../common/type/index'
import { baseInfoFormConfig, contactFormConfig, buttonList, headerForm, experience, skillContext, skillList } from '../common/api/data'

export default defineComponent({
  components: {
    vHeader,
    vPart,
    vButton,
    'dynamic-form': dynamicForm,
  },
  setup(context) {
    //关于抽屉逻辑
    const drawer = ref(false)
    const titles = ref()
    const direction = ref() //抽屉打开方向
    var myvalue: any = reactive({}) //抽屉打开方向

    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawer.value = true
      direction.value = dir
      if (title === '联系方式') {
        let obj = new Object()
        headerForm.contact.map((item: any) => {
          let key = item.label
          let value = item.href
          obj = {
            ...obj,
            [key]: value,
          }
        })
        myvalue = reactive(obj)
        headerForm.contact = myvalue
        console.log('headerForm.contact', headerForm.contact)
      }
    }

    // 基本信息表单绑定
    const baseInfoInput = (e: baseInfo) => {
      console.log('index', e)
      headerForm.baseInfo = reactive(e)
    }

    // 联系方式表单绑定
    const contactInput = (e: any) => {
      console.log('index', e)
      headerForm.contact = reactive(e)
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
      headerForm,
      direction,
      openDrawer,
      handleClose,
      skillContext,
      skillList,
      experience,
      baseInfoInput,
      myvalue,
    }
  },
})
</script>

<style scoped lang="less"></style>
