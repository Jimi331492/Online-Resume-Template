<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-09 03:50:31
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <v-header></v-header>
    <div class="content-bd">
      <div class="content-left">
        <v-part></v-part>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
export default defineComponent({
  components: {
    vHeader,
    vPart,
  },
  setup() {
    // const baseInfo = {
    //   name: '龙际妙', //姓名
    //   E_name: 'Jimi Lo', //英文名
    //   sex_birth_hometown: '男 / 2000.06 湖南', //性别_生日_籍贯
    //   edu_time_: '本科 / 2022年毕业', //学历_毕业时间
    //   school: '河北地质大学', //学校_专业
    //   subject: '软件工程', //专业
    //   job: 'Web前端开发工程师', //应聘职位
    // }
    // const contactInfo = [
    //   {
    //     type: 'url',
    //     key: '个人博客链接',
    //     value: 'http://www.my3iao.com/,',
    //     icon: 'iconfont icon-github',
    //   },
    //   {
    //     type: 'url',
    //     key: 'GitHub链接',
    //     value: 'http://www.jimi331492.github.io/,',
    //     icon: 'iconfont icon-github',
    //   },
    //   {
    //     type: 'tel',
    //     key: '17367695105',
    //     value: '17367695105',
    //     icon: 'iconfont icon-phone_circle_fill',
    //   },
    // ]

    return {}
  },
})
</script>

<style scoped lang="less"></style>
