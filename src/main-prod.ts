/*
 * @Author: 龙际妙
 * @Date: 2021-12-20 02:10:01
 * @Description:
 * @FilePath: \resume-ts-template\src\main-Prod.ts
 * @LastEditTime: 2021-12-20 14:30:16
 * @LastEditors: Please set LastEditors
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/style/global.css'
import './assets/style/index.css'
const app = createApp(App)
app.use(store, key).use(router).use(ElementPlus, { locale })

app.mount('#app')
