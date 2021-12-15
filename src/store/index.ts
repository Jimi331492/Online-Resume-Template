/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\src\store\index.ts
 * @LastEditTime: 2021-12-16 04:07:45
 * @LastEditors: Please set LastEditors
 */
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { header, part } from '../common/type/index'
import { resumerHeader, partList } from '../common/api/data'
// 为 store state 声明类型
export interface GlobalDataProps {
  header: header
  partList: Array<part>
}

// 定义 injection key
export const key: InjectionKey<Store<GlobalDataProps>> = Symbol()

export const store = createStore<GlobalDataProps>({
  state: {
    header: resumerHeader,
    partList: partList,
  },
  mutations: {
    setHeader(state, header) {
      // console.log('header', header)
      state.header = header
    },
    setPartList(state, partList) {
      // console.log('header', header)
      state.partList = partList
    },
  },
})
