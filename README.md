<!--
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:20:02
 * @Description:
 * @FilePath: \resume-ts-template\README.md
 * @LastEditTime: 2021-12-21 15:19:53
 * @LastEditors: Please set LastEditors
-->

# 妙妙 Tools 在线简历模板

## 项目预览

#### [点击预览](https://www.mmgoodstudy.icu/myResume)

## 简介

转眼就大四了，啥也不会，秋招一个 offer 也没拿到，这不想着春招更新一下简历，上一版简历是一个用 Html+css 的纯静态网页，这次就想搞高级一点，想写个能有交互的，真好找模板找到了一个中意的[点击查看](https://wu-sili.gitee.io/resume/) 就想搞一个小 Demo, 本项目是一个纯前端项目，没有进行后端交互

## 所使用的技术

Vue3+Typescript+Less 一个练手项目嘛 就直接冲最新的了 组件库依旧用的是 ElementPlus
项目里用了一些 Vue3 的新特性

- 组合式 API -- 所有的生命周期都可以放到 setup()里，全部按需引入
- 数据响应式原理 vue2 是 Object.defineProperty Vue3 是使用 ES6 的 Proxy 对象
  Vue3 如果想让数据成为响应式数据，必须用 ref 或 reactive, 而 toRef,toRefs 我现在也还没大概理解是啥意思
- TypeScript 基本上只是用来作为一个类型约束，用起来给我感觉和我刚开始用 ESlint 差不多，痛并快乐着，
  有俩问题就是我 类型注解不能用 Object 让我感觉摸不着头脑 必须得先声明一个 Interface 或者用 unknow 给我感觉就很薛定谔
- Less 基本没咋用 就用了一个嵌套的功能 其他感觉用着和 css 一样 如何用了一个 Easy Less 插件自动编译成 css 文件
- Vuex 的作用就是配合 sessionStorage 实现了一个数据持久化，刷新的时候将数据保存到 sessionStorage，刷新完再读取到 Vuex 保存

## 项目结构

src 下的

- assets 静态文件 放了一些 img 和 style 样式文件
- common 写死的默认数据，和定义的 Interface 类型接口
- components 布局组件 Header(就是简历的头部) 和 Part(就是简历下面一段一段的) 和表单组件，这里写了一个动态表单，根据传定义的表单配置，自动生成表单
- router 基本没用到 不要用 history 模式 静态部署到 Github Page 会失败
- stroe Vuex 数据持久化
- views 首页页面

外面的

- .prettierrc prettier配置文件 用了ESLint+Prettie的记得加上 防止ESLint和Prettie冲突
- babel.config babel插件配置
- vue.config.js vuecli 打包部署配置