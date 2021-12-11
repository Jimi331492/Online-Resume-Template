<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-11 03:24:26
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <!-- 简历头部 -->
    <v-header :baseInfo="headerForm.baseInfo" :contact="headerForm.contact"></v-header>
    <div class="content-bd">
      <!-- 简历左部内容 -->
      <div class="content-left">
        <v-part></v-part>
        <v-part :title="experience.title" :context="experience.context" :infoList="experience.infoList"></v-part>
      </div>
      <div class="content-right">
        <v-part></v-part>
        <v-part :title="experience.title" :context="experience.context" :infoList="experience.infoList"></v-part>
      </div>
    </div>
  </div>
  <!-- 弹窗区域 -->
  <el-drawer v-model="drawer" :title="titles" :direction="direction" :before-close="handleClose">
    <dynamic-form :formConfig="formConfig" :value="headerForm.baseInfo"></dynamic-form>
    <!-- <el-form ref="headerFormRef" :model="headerForm" label-width="70px" label-position="left">
      <el-form-item label="姓名">
        <el-input v-model="headerForm.baseInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="英文名">
        <el-input v-model="headerForm.baseInfo.E_name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="headerForm.baseInfo.sex"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-input v-model="headerForm.baseInfo.birth"></el-input>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="headerForm.baseInfo.hometown"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-input v-model="headerForm.baseInfo.edu"></el-input>
      </el-form-item>
      <el-form-item label="毕业时间">
        <el-input v-model="headerForm.baseInfo.edu_time"></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-input v-model="headerForm.baseInfo.school"></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="headerForm.baseInfo.subject"></el-input>
      </el-form-item>
      <el-form-item label="应聘职位">
        <el-input v-model="headerForm.baseInfo.job"></el-input>
      </el-form-item>
    </el-form> -->
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
import { context, form, formConfigObject, formItemConfig } from '../common/type/index'

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
    const titles = ref('')
    const direction = ref('') //抽屉打开方向

    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawer.value = true
      direction.value = dir
    }
    //动态渲染表单
    const formConfig: formConfigObject = reactive({
      labelWidth: '70px',
      labelPosition: 'left',
      size: 'small',
      formItemList: [
        { label: '姓名', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入姓名', subType: '', key: 'name' },
        { label: '英文名', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'E_name' },
        { label: '意向职位', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'sex' },
        { label: '性别', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'birth' },
        { label: '年龄', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'hometown' },
        { label: '户籍', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'edu' },
        { label: '学历', type: 'input', value: 'headerForm.baseInfo.school', placeholder: '请输入', subType: '', key: 'edu_time' },
      ] as Array<formItemConfig>,
    })

    // 抽屉关闭的回调
    const handleClose = (done: FunctionConstructor) => {
      done()
    }

    //设置buttonList
    const buttonList: Array<context> = reactive([
      {
        title: '基本信息',
        bottom: 600,
        direction: 'rtl',
      },
      {
        title: '联系方式',
        bottom: 500,
        direction: 'ltr',
      },
      {
        title: '专业技能',
        bottom: 400,
        direction: 'btt',
      },
      {
        title: '实习经历',
        bottom: 300,
        direction: 'btt',
      },
    ])

    //设置Header
    const headerForm: form = reactive({
      baseInfo: {
        name: '龙际妙', //姓名
        E_name: 'Jimi Lo', //英文名
        sex: '男', //性别
        birth: '2000.06', //生日
        hometown: '湖南', //籍贯
        edu: '本科', //学历
        edu_time: '2022届', //毕业时间
        school: '河北地质大学', //学校_专业
        subject: '软件工程', //专业
        job: 'Web前端开发工程师', //应聘职位
      },
      contact: [
        {
          type: 'https://',
          key: '个人博客',
          value: 'my3iao.com',
          icon: 'icon-blog',
        },
        {
          type: 'https://',
          key: 'GitHub',
          value: 'github.com/Jimi331492',
          icon: 'icon-github-fill',
        },
        {
          type: 'tel:',
          key: '17367695105',
          value: '17367695105',
          icon: 'icon-phone_circle_fill',
        },
        {
          type: 'mailto:',
          key: '1592043271@qq.com',
          value: '1592043271@qq.com',
          icon: 'icon-email',
        },
      ],
    })

    // 设置实习经历
    let experience = reactive({
      title: '实习经历',
      context: {
        name: '中兴通软(北京)科技有限公司',
        time: '2021.09~至今',
      },
      infoList: [
        {
          name: '智牧兴农·管理平台',
          time: '',
          btn: '<a class="btn item-more" href="" target="_blank" title="企业实习">Vue</a>',
          value: '主要利用Vue2.x,和Element组件库搭建',
          tags: {
            'Vue2.x': 'strong',
            Element: 'strong',
          },
        },
        {
          name: '智牧兴农·小程序',
          time: '',
          btn: '',
          value: '负责智牧兴农 小程序 开发，前端基于服务端渲染技术Velocity 模板，学有余力把后端Spring框架学了',
          tags: {
            学有余力: 'em',
            Spring: 'strong',
          },
        },
      ],
    })

    return { drawer, titles, buttonList, formConfig, headerForm, direction, openDrawer, handleClose, experience }
  },
})
</script>

<style scoped lang="less"></style>
