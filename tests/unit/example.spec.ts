/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\tests\unit\example.spec.ts
 * @LastEditTime: 2021-12-07 15:13:56
 * @LastEditors:
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Header, {
      props: { msg },
    })
    expect(wrapper.text()).to.include(msg)
  })
})
