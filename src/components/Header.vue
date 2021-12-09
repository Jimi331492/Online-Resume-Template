<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 15:12:18
 * @Description: 
 * @FilePath: \resume-ts-template\src\components\Header.vue
 * @LastEditTime: 2021-12-09 03:04:20
 * @LastEditors: Please set LastEditors
-->
<template>
  <header class="content-hd">
    <section class="title clearfix">
      <!-- 姓名 -->
      <div class="name">
        <h1>
          {{ baseInfo.name }}
          <small> {{ baseInfo.E_name }}</small>
        </h1>
      </div>
      <div class="job">
        <h2>{{ baseInfo.job }}</h2>
        <div class="avartor">
          <input type="file" class="file-input" d="file" name="file" accept="image/*" ref="input" @change="chooseAva($event)" />
          <div class="file-icon"><span>选择头像</span></div>
          <img src="https://cdn.jsdelivr.net/gh/Jimi331492/cdn@1.2/img/custom/avatar.jpg" alt="" class="file-img" ref="avaImg" />
        </div>
      </div>
    </section>

    <div class="clearfix">
      <!-- 基本信息+教育信息 -->
      <section class="info">
        <h2>{{ baseInfo.sex_birth_hometown }}</h2>
        <h3>{{ baseInfo.edu_time_ }}</h3>

        <p>
          <a
            target="_blank"
            href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E6%B2%B3%E5%8C%97%E5%9C%B0%E8%B4%A8%E5%A4%A7%E5%AD%A6&oq=%25E9%2587%258D%25E5%25BA%2586%25E9%2582%25AE%25E7%2594%25B5%25E5%25A4%25A7%25E5%25AD%25A6&rsv_pq=aa4d3790000d4fb4&rsv_t=205czoWQgAeiez6W2my5tUNmth4SN9NE8quzLc42j%2FnJ1ie%2F%2Fj0dxz0rsnU&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=18&rsv_sug1=16&rsv_sug7=100&bs=%E9%87%8D%E5%BA%86%E9%82%AE%E7%94%B5%E5%A4%A7%E5%AD%A6"
          >
            {{ baseInfo.school }}
          </a>
          {{ baseInfo.subject }}
        </p>
      </section>
      <!-- 联系方式 -->
      <section class="contact">
        <ul>
          <li v-for="(item, index) in contactInfo" :key="index">
            <a :href="item.type + item.value" target="_blank">
              <span>{{ item.key }}</span>
              <i :class="'iconfont ' + item.icon"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
// interface baseInfo {
//   name: string //姓名
//   E_name: string //英文名
//   sex_birth_hometown: string //性别_生日_籍贯
//   edu_time_: string //学历_毕业时间
//   school: string
//   subject_: string //学校_专业
//   job: string //应聘职位
// }
// interface contactInfo {
//   Zhi_Hu: string //知乎
//   Gitee: string //码云
//   Git_Hub: string //性别_生日_籍贯
//   tel: number //电话
//   e_mail: string //邮箱
//   blog: string
// }
export default defineComponent({
  name: 'Headers',
  props: {
    baseInfo: {
      type: Object,
      //对象
      default: () => {
        return {
          name: '龙际妙', //姓名
          E_name: 'Jimi Lo', //英文名
          sex_birth_hometown: '男 / 2000.06 湖南', //性别_生日_籍贯
          edu_time_: '本科 / 2022年毕业', //学历_毕业时间
          school: '河北地质大学', //学校_专业
          subject: '软件工程', //专业
          job: 'Web前端开发工程师', //应聘职位
        }
      },
    },
    contactInfo: {
      type: Array,
      //对象
      default: () => {
        return [
          {
            type: 'https://',
            key: '个人博客',
            value: 'my3iao.com',
            icon: 'icon-blog',
          },
          {
            type: 'https://',
            key: 'GitHub',
            value: 'github.com/Jimi331492',
            icon: 'icon-github-fill',
          },
          {
            type: 'tel:',
            key: '17367695105',
            value: '17367695105',
            icon: 'icon-tel',
          },
          {
            type: 'mailto:',
            key: '1592043271@qq.com',
            value: '1592043271@qq.com',
            icon: 'icon-email',
          },
        ]
      },
    },
  },
  setup(props) {
    console.log('props', props)
    let base: Ref
    const avaImg: Ref = ref(null)

    let chooseAva = function (e: Event) {
      console.log('e', e)
      let files: FileList = (e.target as HTMLInputElement).files as FileList
      let file: File | Blob = files[0]
      // console.log('file', file)
      //未选中图片 直接返回
      if (files.length === 0) return
      //生成一个文件读取器
      const reader = new FileReader()

      // 转换为Base64
      reader.readAsDataURL(file)

      // 读取完成回调函数
      reader.onload = () => {
        // 保存base结果，生成响应式数据
        base = ref(reader.result)

        const value: HTMLImageElement = avaImg.value
        // 设置src
        value.setAttribute('src', base.value)
      }
    }

    return { chooseAva, avaImg }
  },
})
</script>

<style lang="less" scoped></style>
