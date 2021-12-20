/*
 * @Author: your name
 * @Date: 2021-07-28 06:07:22
 * @LastEditTime: 2021-12-20 16:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \resume-ts-template\vue.config.js
 */
const externals = {
  vue: 'Vue',
  'vue-class-component': 'vueClassComponent',
  vuex: 'Vuex',
  'vue-router': 'VueRouter',
  'element-plus': 'ElementPlus',
}

const cdn = {
  css: ['https://unpkg.com/element-plus/dist/index.css'],

  js: [
    'https://unpkg.com/vue@3.2.26/dist/vue.global.js',
    'https://unpkg.com/vue-class-component@7.2.6/dist/vue-class-component.js',
    'https://unpkg.com/vuex@4.0.2/dist/vuex.global.js',
    'https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js',
    'https://unpkg.com/element-plus',
  ],
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'docs',
  chainWebpack: (config) => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.entry('app').clear().add('./src/main-prod.ts')
      config.externals(externals)
      config.plugin('html').tap((args) => {
        args[0].isProd = true
        args[0].cdn = cdn
        return args
      })
    })

    config.when(process.env.NODE_ENV === 'development', (config) => {
      config.entry('app').clear().add('./src/main-dev.ts')
      config.plugin('html').tap((args) => {
        args[0].isProd = false
        return args
      })
    })
  },
}
