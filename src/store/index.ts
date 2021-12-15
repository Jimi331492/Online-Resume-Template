/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\src\store\index.ts
 * @LastEditTime: 2021-12-16 00:59:14
 * @LastEditors: Please set LastEditors
 */
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
// 为 store state 声明类型
export interface GlobalDataProps {
  addPartFinish: boolean
}

// 定义 injection key
export const key: InjectionKey<Store<GlobalDataProps>> = Symbol()

export const store = createStore<GlobalDataProps>({
  state: {
    addPartFinish: false,
  },
  mutations: {
    setAddPartFinish(state, addPartFinish) {
      state.addPartFinish = addPartFinish
    },
  },
})
