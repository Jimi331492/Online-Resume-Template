/*
 * @Author: 龙际妙
 * @Date: 2021-12-11 13:43:51
 * @Description:
 * @FilePath: \resume-ts-template\src\common\api\data.ts
 * @LastEditTime: 2021-12-17 13:15:59
 * @LastEditors: Please set LastEditors
 */

import { reactive } from 'vue'
import { formConfigObject, formItemConfig, header, part, partItem } from '../type/index'
//设置Header
export const resumerHeader: header = reactive({
  baseInfo: {
    name: '龙际妙', //姓名
    E_name: 'Jimi Lo', //英文名
    sex: '男', //性别
    birth: '2000.06', //生日
    hometown: '湖南', //籍贯
    edu: '本科', //学历
    edu_time: '2022届', //毕业时间
    school: '河北地质大学', //学校_专业
    school_url:
      'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=88093251_34_hao_pg&wd=%E6%B2%B3%E5%8C%97%E5%9C%B0%E8%B4%A8%E5%A4%A7%E5%AD%A6&fenlei=256&rsv_pq=9f2df52d0001d879&rsv_t=d20aQxyaphcN4AyImYK5czXEHER%2FUKl0tNdvtH1oKcy0SDscKJMm8OF2PWc3Cvgq94TcVOvRY9d7&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=22&rsv_sug1=15&rsv_sug7=100',
    subject: '软件工程', //专业
    job: 'Web前端开发工程师', //应聘职位
  },
  contact: [
    {
      key: '个人博客',
      value: '',
      href: 'https://my3iao.com',
      icon: 'icon-blog',
    },
    {
      key: 'GitHub',
      value: '',
      href: 'https://github.com/Jimi331492',
      icon: 'icon-github-fill',
    },
    {
      key: 'iPhone',
      value: '17367695105',
      href: 'tel:17367695105',
      icon: 'icon-phone-fill',
    },
    {
      key: 'Email',
      value: '1592043271@qq.com',
      href: 'mailto:1592043271@qq.com',
      icon: 'icon-email',
    },
  ],
})

// const sexOption = [
//   {
//     label: '男',
//     value: '男',
//   },
//   {
//     label: '女',
//     value: '女',
//   },
//   {
//     label: 'NULL',
//     value: '',
//   },
// ]

export const baseInfoFormConfig: formConfigObject = reactive({
  labelWidth: '70px',
  labelPosition: 'left',
  size: 'small',
  formItemList: [
    { label: '姓名', type: 'input', value: '', placeholder: '请输入姓名', subType: '', key: 'name' },
    { label: '英文名', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'E_name' },
    { label: '意向职位', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'job' },
    { label: '性别', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'sex' },
    { label: '年龄', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'birth' },
    { label: '户籍', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'hometown' },
    { label: '学历', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'edu' },
    { label: '毕业时间', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'edu_time' },
    { label: '学校', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'school' },
    { label: '学校链接', type: 'textarea', value: '', placeholder: '请输入', subType: '', key: 'school_url' },
    { label: '专业', type: 'input', value: '', placeholder: '请输入', subType: '', key: 'subject' },
  ] as Array<formItemConfig>,
})

export const contactFormConfig: formConfigObject = reactive({
  labelWidth: '70px',
  labelPosition: 'left',
  size: 'small',
  formItemList: [
    { label: '手机号', type: 'input', value: '', placeholder: '请输入手机号', subType: '', key: 'iPhone' },
    { label: '邮箱', type: 'input', value: '', placeholder: '请输入邮箱', subType: '', key: 'Email' },
    { label: 'GitHub', type: 'textarea', value: '', placeholder: '请输入GitHub', subType: '', key: 'GitHub' },
    { label: '个人博客', type: 'textarea', value: '', placeholder: '请输入博客地址', subType: '', key: '个人博客' },
  ] as Array<formItemConfig>,
})

export const partFormConfig: formConfigObject = reactive({
  labelWidth: '70px',
  labelPosition: 'left',
  size: 'small',
  formItemList: [
    { label: '主标题', type: 'input', value: '', placeholder: '请输入主标题', subType: '', key: 'mainTitle' },
    { label: '副标题', type: 'input', value: '', placeholder: '请输入副标题', subType: '', key: 'subTitle' },
    { label: '描述', type: 'input', value: '', placeholder: '请输入描述', subType: '', key: 'subBtnHtml' },
    { label: '说明', type: 'input', value: '', placeholder: '请输入说明', subType: '', key: 'subRemark' },
    { label: '段落', type: 'radio', value: '', placeholder: '请选择段落', subType: '', key: 'childId' },
    { label: '段落标题', type: 'input', value: '', placeholder: '请输入标题', subType: 0, key: 'title' },
    { label: '段落描述', type: 'input', value: '', placeholder: '请输入描述', subType: 0, key: 'btnHtml' },
    { label: '段落说明', type: 'input', value: '', placeholder: '请输入说明', subType: 0, key: 'remark' },
    { label: '段落内容', type: 'textarea', value: '', placeholder: '请输入内容', subType: 0, key: 'value' },
  ] as Array<formItemConfig>,
})

export const linkFormConfig: formConfigObject = reactive({
  labelWidth: '70px',
  labelPosition: 'left',
  size: 'small',
  formItemList: [
    { label: '图片路径', type: 'textarea', value: '', placeholder: '请输入', subType: '', key: 'qr_img' },
    { label: '预览路径', type: 'textarea', value: '', placeholder: '请输入', subType: '', key: 'show_href' },
    { label: '源码路径', type: 'textarea', value: '', placeholder: '请输入', subType: '', key: 'code_href' },
  ] as Array<formItemConfig>,
})

export const partList: Array<part> = reactive([
  {
    // 设置专业技能
    id: 0,
    childId: 0,
    mainTitle: '专业技能',
    partItemList: [
      {
        parentId: 0,
        itemId: 0,
        value: '熟悉 HTML、CSS、JS、ES6',
        tags: {
          HTML: 'strong',
          CSS: 'strong',
          JS: 'strong',
          ES6: 'strong',
        },
      },
      {
        parentId: 0,
        itemId: 1,
        value: '熟悉 Vue、ElmentUI、Webpack，能独立搭建博客',
        tags: {
          Vue: 'strong',
          ElmentUI: 'strong',
          Webpack: 'strong',
          搭建博客: 'em',
        },
      },
      {
        parentId: 0,
        itemId: 2,
        value: '熟悉 Git、有良好的编程习惯,参与过团队开发',
        tags: {
          Git: 'strong',
          编程习惯: 'em',
          团队开发: 'em',
        },
      },
      {
        parentId: 0,
        itemId: 3,
        value: '了解 Java、SpringBoot , 能实现简单CRUD接口',
        tags: {
          Java: 'strong',
          SpringBoot: 'strong',
          CRUD接口: 'em',
        },
      },
    ] as Array<partItem>,
  },
  {
    // 设置实习经历
    id: 1,
    childId: 0,
    mainTitle: '实习经历',
    subTitle: '中兴通软(北京)科技有限公司',
    subRemark: '2021.09~至今',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 1,
        itemId: 0,
        title: '智牧兴农·管理平台',
        remark: '',
        btnHtml: '<a class="btn item-more" href="" target="_blank" title="企业实习">Vue</a>',
        value: '主要利用Vue2.x,和Element组件库搭建',
        tags: {
          'Vue2.x': 'strong',
          Element: 'strong',
        },
      },
      {
        parentId: 1,
        itemId: 1,
        title: '智牧兴农·小程序',
        remark: '',
        btnHtml: '',
        value: '负责智牧兴农 小程序 开发，前端基于服务端渲染技术Velocity 模板，学有余力把后端Spring框架学了',
        tags: {
          学有余力: 'em',
          Spring: 'strong',
        },
      },
    ] as Array<partItem>,
  },
])

export const partForm: part = reactive({
  // 设置专业技能
  id: -1,
  childId: 0,
  mainTitle: '',
  partItemList: [
    {
      parentId: 0,
      itemId: 0,
      value: '',
      tags: {},
    },
  ] as Array<partItem>,
})

export const drawerList = reactive([
  {
    mainTitle: '基本信息',
    direction: 'rtl',
  },
  { mainTitle: '联系方式', direction: 'ltr' },
])
