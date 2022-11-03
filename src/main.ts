/*
 * @Author: 龙际妙ss
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: /Online-Resume-Template/src/main.ts
 * @LastEditTime: 2022-11-03 16:33:24
 * @LastEditors: Jimi Lo
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/style/global.less'
import './assets/style/index.less'
const app = createApp(App)
app.use(store, key).use(router).use(ElementPlus, { locale })

app.mount('#app')
