/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\src\router\index.ts
 * @LastEditTime: 2021-12-20 16:47:03
 * @LastEditors: Please set LastEditors
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Index = () => import(/* webpackChunkName: "public" */ '../views/Index.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/index' },
  { path: '/index', meta: { title: '简历模板' }, component: Index },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
