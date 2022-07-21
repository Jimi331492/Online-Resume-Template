/*
 * @Author: 龙际妙
 * @Date: 2021-12-11 13:43:51
 * @Description:
 * @FilePath: \resume-ts-template\src\common\api\data.ts
 * @LastEditTime: 2022-07-22 01:51:35
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
    job: '前端开发工程师', //应聘职位
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
      value: 'jimi331492@gmail.com',
      href: 'mailto:jimi331492@gmail.com',
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
        value: '具有PC端、移动端、前后端分离及小程序等相关项目的开发经验，后台管理设计方案。能熟练使用HTML、CSS、JavaScript构建高性能的前端应用程序。',
        tags: {
          HTML: 'strong',
          CSS: 'strong',
          PC端: 'strong',
          移动端: 'strong',
          前后端分离及小程序: 'strong',
          JavaScript: 'strong',
        },
      },
      {
        parentId: 0,
        itemId: 1,
        value:
          '熟悉<strong>JavaScript</strong>，能熟练使用<strong>ES6</strong>语法，保证代码的<em>高质量可维护性</em>。能熟练使用<strong>Less</strong>提高CSS编写效率，并保证CSS的可维护性。以<strong>Vue</strong>，<strong>Webpack</strong>，<strong>微信小程序</strong>为常用前端技术栈。',
        tags: {
          Vue: 'strong',
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
          '熟悉<strong>Element</strong>,<strong>Antd</strong>,<strong>Bootstrap</strong>等常用前端UI框架,能对该技术栈项目进行<em>页面重构</em>。熟练掌握<strong>Flex，Grid</strong>等布局方式，了解<em>响应式布局原理</em>，了解<strong>Axios</strong>,<strong>Echarts</strong>,<strong>loadsh</strong>等JS类库。',
        tags: {
          Element: 'strong',
          Antd: 'strong',
          Bootstrap: 'strong',
          Axios: 'strong',
          Echarts: 'strong',
          loadsh: 'strong',
        },
      },
      {
        parentId: 0,
        itemId: 3,
        value:
          '能熟练使用<strong>Git</strong>进行版本控制、<strong>Fiddler</strong>抓包，掌握<strong>Linux Shell</strong>基本命令,熟悉<strong>Markdown</strong>文档编写，掌握<strong>Vue,SpringBoot以及小程序</strong>等前后端分离项目的<em>开发流程</em>、<em>调试技巧</em>、<em>部署步骤</em>。',
        tags: {
          Git: 'strong',
          Fiddler: 'strong',
          'Linux Shell': 'strong',
          Markdown: 'strong',
          开发流程: 'em',
          调试技巧: 'em',
          部署步骤: 'em',
        },
      },
      // {
      //   parentId: 0,
      //   itemId: 4,
      //   value: '',
      //   tags: {},
      // },
    ] as Array<partItem>,
  },
  {
    // 设置实习经历
    id: 1,
    childId: 0,
    mainTitle: '工作经历',
    subTitle: '中兴通软(北京)软件有限责任公司',
    subRemark: '2021.09~2022.07',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 1,
        itemId: 0,
        title: '智牧兴农',
        qr_img: 'https://cdn.jsdelivr.net/gh/Jimi331492/cdn/img/project/cownetwork.jpg',
        remark: '',
        btnHtml: '<a class="btn item-more" href="http://cow.zxtrj.com/logins" target="_blank" title="企业实习">后台管理+微信小程序</a> ',
        value: '项目描述：智牧兴农是一个<em>智慧牧场管理平台</em>，主要功能为实现对牲畜的活动、饲喂、生产情况进行监测，记录历史成长情况等。',
        tags: {},
      },
      // {
      //   parentId: 1,
      //   itemId: 1,
      //   title: '智牧兴农·微信小程序',
      //   remark: '',
      //   btnHtml: '<a class="btn item-more" href="" target="_blank" title="企业实习">MINA</a> ',
      //   value: '完成项目从零搭建到顺利上线并使用，及时处理客户提出的功能需求和问题。',
      //   tags: {
      //     Flex: 'strong',
      //     ES6: 'strong',
      //     '3天熟悉': 'em',
      //     独立实现: 'em',
      //     组件化: 'em',
      //     封装: 'em',
      //   },
      // },
      {
        parentId: 1,
        itemId: 1,
        title: '',
        remark: '',
        btnHtml: ' ',
        value:
          '项目职责：从零搭建<em>智牧兴农·小程序</em>到顺利发布上线并使用，包括接入<strong>微信支付</strong>，<strong>蓝牙通讯模块</strong>，基于Echarts绘制产量图表和谱系关系图等可视化模块，以及实现<em>基本业务功能</em>。开发维护Vue后台管理项目，解决提出的功能需求和问题。',
        tags: {},
      },
      {
        parentId: 1,
        itemId: 2,
        title: '保险理赔小程序',
        remark: '',
        btnHtml: '<a class="btn item-more" href="" target="_blank" title="企业实习">MINA</a> ',
        value: '项目描述：主要为智牧兴农的牲畜和牧场进行<em>投保理赔</em>，可以实时拍照录像上传至 <strong>OSS识别</strong> 服务器实现定损、理赔的系统。',
        tags: {},
      },
      {
        parentId: 1,
        itemId: 3,
        title: '',
        remark: '',
        btnHtml: ' ',
        value: '项目职责：主要负责<em>登录认证</em>，身份信息和银行卡的<strong>OCR识别</strong>。投保/支付/历史订单查询以及联系客服、展示资讯、回复评论等功能',
        tags: {},
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
        title: '乐于分享',
        remark: '',
        btnHtml: '',
        value: '在 个人独立博客、LeetCode 社区多次分享技术文章和参与技术讨论，在公司实习过程中多次组织技术交流',
        tags: {
          个人独立博客: 'strong',
          LeetCode: 'strong',
        },
      },
      {
        parentId: 2,
        itemId: 1,
        title: '开源项目、产品设计经验',
        remark: '',
        btnHtml: '',
        value:
          '有相关开源项目经验，从原型设计到前后端产品落地：「通用权限管理系统」' +
          '和「在线简历模板」，前者主要提高相关to B 产品前后端开发速度，后者主要提供给大家一个丰富样式，精美布局的一个简历模板，' +
          '在当前千篇一律的简历样式中凸显自我。',
        tags: {
          原型设计: 'em',
          产品落地: 'em',
          丰富样式: 'em',
          精美布局: 'em',
          凸显自我: 'em',
        },
      },

      // {
      //   parentId: 2,
      //   itemId: 1,
      //   title: '持续保持知识积累，对新技术好奇',
      //   remark: '',
      //   btnHtml: '',
      //   value: '每周于语雀知识库中编写技术总结，对 CSS Houdini、Serverless、PWA 等新技术持续保持好奇心',
      //   tags: {
      //     语雀知识库: 'strong',
      //   },
      // },
    ] as Array<partItem>,
  },
  {
    // 设置项目经历
    id: 3,
    childId: 0,
    mainTitle: '项目作品',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 3,
        itemId: 0,
        title: 'WeHgu校园社区',
        qr_img: 'https://cdn.jsdelivr.net/gh/Jimi331492/cdn/img/project/wehgu.png',
        code_href: 'https://github.com/Jimi331492/wehgu/',
        remark: '2021-07 ~ 2021-08',
        btnHtml: '<a class="btn item-more" href="https://www.my3iao.com/wehgu-vue-admin/#/login" target="_blank" title="WeHgu校园墙后台管理系统">点击预览</a> ',
        value:
          '该项目为<em>小型全栈项目</em>，分为微信小程序，Vue后台管理以及SpringBoot后端服务，主要包括发帖/点赞/回复评论、内容展示以及相关校园服务，例如代领快递、二手交易、以及账号个人信息的修改和处理。',
        tags: {},
      },

      {
        parentId: 3,
        itemId: 1,
        title: '',
        remark: '',
        btnHtml: '',
        value:
          '在后端服务中，使用<strong>Spring Security</strong>实现后端权限控制，路由守卫实现前端鉴权， 封装<strong>Axios</strong>统一管理项目 API，设置 Http 拦截器，在拦截器中设置公共请求头和异常<em>统一处理</em>，使用<strong>Async/await</strong>进行异步流程控制。 使用<strong>骨架屏</strong>优化等待体验， 优化<strong>SPA</strong>首屏页面渲染时间长、<em>路由懒加载</em>减少首屏代码块体积，<strong>Element</strong>按需导入减少依赖体积， 引用 <strong>CDN</strong> 外链加速传输。',
        tags: {},
      },
      // <em></em>
      // <strong></strong>
      {
        parentId: 3,
        itemId: 2,
        title: '',
        remark: '',
        btnHtml: '',
        value:
          '为满足点赞和评论等高并发度的操作引入了<strong>Redis</strong>缓存和<strong>Quartz</strong>定时任务，使用阿里云进行管理<strong>OSS</strong>服务，<em>域名DNS配置</em>，<em>HTTPS证书配置</em>等。在Ubuntu系统中搭建Nginx环境并完成后端项目的<em>上线部署</em>。',
        tags: {},
      },

      // },
    ] as Array<partItem>,
  },
  {
    // 设置项目经历
    id: 4,
    childId: 0,
    mainTitle: '开源项目',
    subTitle: '',
    subRemark: '',
    subBtnHtml: '',
    partItemList: [
      {
        parentId: 4,
        itemId: 0,
        title: '通用权限管理模板',
        code_href: 'https://github.com/Jimi331492/Mj-Admin-Template',
        remark: '',
        btnHtml: '<a class="btn item-more" href="https://www.my3iao.com/Mj-Admin-Template/#/login" target="_blank" title="开源项目">Vue全家桶</a> ',
        value:
          '是一个基于 <strong>Vue3</strong> 和<strong>SpringBoot</strong>开发的全栈前后端分离的基础权限管理模板，' +
          '通过集成<em>shiro+jwt鉴权</em>，<em>动态路由</em>，<em>动态菜单</em>，<em>按钮权限</em>等功能，提供多种示例，将更多时间专注在业务开发上。',
        tags: {
          Vue3: 'strong',
          SpringBoot: 'strong',
          'shiro+jwt鉴权': 'em',
          动态路由: 'em',
          按钮权限: 'em',
          动态菜单: 'em',
        },
      },
      {
        parentId: 4,
        itemId: 1,
        title: '',
        remark: '',
        btnHtml: '',
        value:
          '在项目开发过程，主要难点在于通过addRoute动态生成路由,自定义Vue指令实现按钮级别的权限控制。' +
          '其他亮点有：使用WebSocket展示实时在线人数，并通过Echarts进行数据可视化。在开发过程中通过Swagger接口文档进行联合调试。',
        tags: {
          addRoute: 'strong',
          Echarts: 'strong',
          WebSocket: 'strong',
          数据可视化: 'em',
          自定义Vue指令: 'em',
          Swagger: 'strong',
          联合调试: 'em',
        },
      },
      {
        parentId: 3,
        itemId: 2,
        title: '在线简历模板',
        qr_img: 'https://cdn.jsdelivr.net/gh/Jimi331492/cdn/img/project/onlineResum.png',
        code_href: 'https://github.com/Jimi331492/Online-Resume-Template/',
        show_href: 'https://www.my3iao.com/Online-Resume-Template/',
        remark: '2021-11 ~ 2021-12',
        btnHtml: '<a class="btn item-more" href="" target="_blank" title="开源项目">Typescript</a> ',
        value:
          '使用了Vue3+Typescript,并采用了Composition API写法，运用 Less 提高样式编写效率,' +
          '主要实现了一个在线的可编辑的简历模板，运用CSS变量实现改变背景颜色，采用媒体查询实现打印格式，适配不同屏幕大小，达到响应式效果。',
        tags: {
          'Composition API': 'strong',
          'Vue3+Typescript': 'strong',
          Less: 'strong',
          媒体查询: 'em',
          响应式效果: 'em',
        },
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
          '本人热爱互联网，热爱编程，已积累一定数量<em>中小型前端项目开发经验</em>，WEB后端方向熟悉<strong>Java</strong>语言，能使用<strong>SpringBoot</strong>或<strong>Node.js</strong>搭建后端项目开发环境，能自己<em>独立开发小型全栈项目</em>，能够积极落实完成工作任务，能持续保持知识积累，对新技术好奇。' +
          '购买过云服务器，有在服务器进行搭建生产环境并部署项目的经历，<em>独立搭建博客</em>用于学习，交流技术。',
        tags: {
          热爱互联网: 'em',
          热爱编程: 'em',
          Java: 'strong',
          SpringBoot: 'strong',
          Nodejs: 'strong',
          小型全栈项目: 'em',
          保持知识积累: 'em',
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
