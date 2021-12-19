/*
 * @Author: 龙际妙
 * @Date: 2021-12-11 13:43:51
 * @Description:
 * @FilePath: \resume-ts-template\src\common\api\data.ts
 * @LastEditTime: 2021-12-19 12:06:43
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
        value:
          '熟悉 <strong>HTML</strong>、<strong>CSS</strong>、<strong>JavaScript</strong>,对<em>HTML语义化</em>有一定的了解,重视<em>页面交互</em>与<em>用户体验</em>。',
        tags: {
          HTML: 'strong',
          CSS: 'strong',
          JS: 'strong',
          JavaScript: 'strong',
        },
      },
      {
        parentId: 0,
        itemId: 1,
        value:
          '能熟练使用<strong>ES6</strong>语法编程，追求代码<em>高质量可维护性</em>。以<strong>Vue</strong>，<strong>Less</strong>，<strong>Webpack</strong>，<strong>微信小程序</strong>等为常用技术栈。',
        tags: {
          Vue: 'strong',
          Less: 'strong',
          Webpack: 'strong',
          ES6: 'strong',
          微信小程序: 'strong',
          高质量可维护性: 'em',
        },
      },
      {
        parentId: 0,
        itemId: 2,
        value:
          '熟悉<strong>Element</strong>,<strong>Bootstrap</strong>等组件库,能对该技术栈项目进行<em>页面重构</em>。了解<strong>Axios</strong>,<strong>JQuery</strong>,<strong>Echarts</strong>,<strong>loadsh</strong>等JS类库。',
        tags: {
          Element: 'strong',
          Bootstrap: 'strong',
          Axios: 'strong',
          JQuery: 'strong',
          Echarts: 'strong',
          loadsh: 'strong',
          日常维护: 'em',
        },
      },
      {
        parentId: 0,
        itemId: 3,
        value:
          '能熟练使用<strong>Git</strong>进行<em>版本控制</em>和<em>代码托管</em>、熟悉<strong>Markdown</strong>文档编写，了解项目常规<em>开发流程</em>、开发<em>调试技巧</em>、发布<em>部署步骤</em>。',
        tags: {
          Git: 'strong',
          Markdown: 'strong',
          版本控制: 'em',
          代码托管: 'em',
          开发流程: 'em',
          调试技巧: 'em',
          部署步骤: 'em',
        },
      },
      {
        parentId: 0,
        itemId: 4,
        value: '了解SpringBoot，能简单实现接口，并利用Swagger或Postman进行接口测试。',
        tags: {
          SpringBoot: 'strong',
          Swagger: 'strong',
          Postman: 'strong',
          实现接口: 'em',
          接口测试: 'em',
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
        btnHtml: '<a class="btn item-more" href="" target="_blank" title="企业实习">Vue全家桶</a> ',
        value:
          '该项目组件库采用Element，整体采用24栅格+Flex布局，在项目中主要负责相关功能模块的开发，在开发过程中，遵循模块化开发，参与制定团队组件规范，保证代码的高复用性与可读性，项目使用Git进行版本控制和代码托管。',
        tags: {
          Element: 'strong',
          Git: 'strong',
          '24栅格+Flex': 'em',
          模块化开发: 'em',
          组件规范: 'em',
          高复用性: 'em',
          可读性: 'em',
          版本控制: 'em',
          代码托管: 'em',
        },
      },
      {
        parentId: 1,
        itemId: 1,
        title: '智牧兴农·微信小程序',
        remark: '',
        btnHtml: '<a class="btn item-more" href="" target="_blank" title="企业实习">MINA</a> ',
        value:
          '项目整体采用Flex弹性布局，主要负责快速构建高质量页面，在拥有不错的ES6及其它基础下，3天熟悉小程序的基础语法，开发流程，能调用相关微信接口独立实现业务需求。由于项目中有大量的表单数据，各UI库又没有合适的组件,基于组件化的思想，自己二次封装了Table组件,解决了项目中大量数据的展示问题。',
        tags: {
          Flex: 'strong',
          ES6: 'strong',
          组件化: 'em',
          二次封装: 'em',
        },
      },
    ] as Array<partItem>,
  },
  {
    // 设置实习经历
    id: 2,
    childId: 0,
    mainTitle: '相关能力',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 2,
        itemId: 0,
        title: '英语四级',
        remark: '',
        btnHtml: '',
        value: '较好的英文阅读能力，能通过科学上网的方式了解国内外相关技术的发展。',
        tags: {},
      },
      {
        parentId: 2,
        itemId: 1,
        title: '普通话二级-乙等',
        remark: '',
        btnHtml: '',
        value: '乐于和同样热爱的人交流技术，探索技术能在实际生活的应用，实现技术解放生产力。',
        tags: {
          交流技术: 'em',
          解放生产力: 'em',
        },
      },
    ] as Array<partItem>,
  },
  {
    // 设置项目经历
    id: 3,
    childId: 0,
    mainTitle: '开源项目',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 3,
        itemId: 0,
        title: 'Mj|Admin Template',
        remark: '',
        btnHtml: '',
        value: '一个基于Vue3+ElementPlus的后台管理模板，实现了前端的动态菜单，路由控制，按钮级别的权限控制。',
        tags: {},
      },
      {
        parentId: 3,
        itemId: 1,
        title: '在线简历模板',
        // show_href: 'mmgoodstudy.icu/demoWall',
        remark: '2021-11 ~ 2021-12',
        btnHtml: '',
        value: '基于Vue3+TS实现的一个简历模板',
        tags: {},
      },
    ] as Array<partItem>,
  },
  {
    // 设置项目经历
    id: 4,
    childId: 0,
    mainTitle: '项目作品',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 4,
        itemId: 0,
        title: '电商后台管理系统',
        // show_href: 'mmgoodstudy.icu/demoWall',
        remark: '2021-07 ~ 2021-08',
        btnHtml: '',
        value:
          '基于Vue3+ElementPlus+Node.js开发的电商后台管理系统，采用了前后端分离的开发模式，实现了登录退出功能，和对用户，商品，权限，订单，数据的管理以及前端页面布局。',
        tags: {},
      },
      {
        parentId: 4,
        itemId: 1,
        title: '网上鲜花销售系统',
        remark: '',
        btnHtml: '',
        value: '前端：HTML/CSS, jQuery，bootstrap。后端：基于SSM框架+数据库MySQL开发。该项目为小组开发。',
        tags: {},
      },
      {
        parentId: 4,
        itemId: 1,
        title: '',
        remark: '',
        btnHtml: '',
        value: '前端：HTML/CSS, jQuery，bootstrap。后端：基于SSM框架+数据库MySQL开发。该项目为小组开发。',
        tags: {},
      },
      {
        parentId: 4,
        itemId: 1,
        title: '',
        remark: '',
        btnHtml: '',
        value: '前端：HTML/CSS, jQuery，bootstrap。后端：基于SSM框架+数据库MySQL开发。该项目为小组开发。',
        tags: {},
      },
    ] as Array<partItem>,
  },
  {
    // 设置项目经历
    id: 5,
    childId: 0,
    mainTitle: '自我评价',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 5,
        itemId: 0,
        title: '',
        remark: '',
        btnHtml: '',
        value:
          '本人热爱互联网，热爱编程，已积累一定数量中小型前端项目开发经验，能够落实完成工作任务，WEB后端方向熟悉Java语言，了解Spring Boot，和Node.js，能自己开发一些小型全栈项目， 乐于了解新技术，购买过云服务器，有在Cent.OS服务器进行远程部署项目的经历，独立搭建博客用于学习，交流技术。',
        tags: {},
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
