/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\babel.config.js
 * @LastEditTime: 2021-12-20 02:12:31
 * @LastEditors: Please set LastEditors
 */

// 这是项目发布阶段需要用到的 remove-console 插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // plugins: ['transform-remove-console']
  plugins: [...prodPlugins, '@babel/plugin-syntax-dynamic-import'],
}
