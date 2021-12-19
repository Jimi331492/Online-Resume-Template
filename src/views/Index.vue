<!--
 * @Author: 龙际妙
 * @Date: 2021-12-07 13:40:15
 * @Description: 
 * @FilePath: \resume-ts-template\src\views\Index.vue
 * @LastEditTime: 2021-12-18 20:11:18
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="content">
    <!-- 简历头部 -->
    <v-header :baseInfo="header.baseInfo" :contact="header.contact"></v-header>
    <div class="content-bd">
      <!-- 简历左部 -->
      <div :class="isInline ? 'content-left' : 'content-inline'">
        <template v-for="item in partList.slice(0, 3)" :key="item.id">
          <v-part :part="item" @delete="deletePart"></v-part>
        </template>
      </div>
      <!-- 简历右部 -->
      <div :class="isInline ? 'content-right' : 'content-inline'">
        <template v-for="item in partList.slice(3, 6)" :key="item.id">
          <v-part :part="item" @delete="deletePart"></v-part>
        </template>
      </div>
    </div>
  </div>
  <!-- 页脚 -->
  <footer class="github-footer">
    <a class="footer-link" href="https://github.com/Jimi331492/myResume" target="_blank">
      <i class="iconfont icon-link"></i>
      简历GitHub仓库
    </a>
  </footer>
  <!-- 功能按钮区域 -->
  <div class="btn_wrap_top"></div>
  <div class="btn_wrap_left">
    <span class="pdf btn2" @click="changeTheme">
      <i class="iconfont icon-theme"></i>
      更改主题</span
    >
    <span class="pdf btn2" @click="changeFormat">
      <i class="iconfont icon-change"></i>
      改变格式</span
    >
    <a class="pdf btn2" href="resume.pdf">
      <i class="iconfont icon-pdf"></i>
      PDF简历
    </a>
  </div>

  <div class="btn_wrap_right">
    <span :class="!design ? 'edit btn2' : 'btn2 onEdit'" @click="designModel">{{ !design ? '编辑' : '退出编辑' }}</span>
    <span class="edit btn2" @click="showConfirm">重置</span>
  </div>

  <!-- 按钮导航区域 -->
  <nav class="btnArea">
    <div class="drawer-btn">
      <template v-for="(item, index) in drawerList" :key="index">
        <v-button :context="item" @click="openDrawer(item.mainTitle, item.direction)"></v-button>
      </template>
    </div>
    <div class="dialog-btn">
      <template v-for="item in partList" :key="item.id">
        <v-button :context="item" @click="openDialog(item.mainTitle, item.id)"></v-button>
      </template>
      <v-button
        :context="{
          mainTitle: '+',
        }"
        @click="openAddDialog"
        v-show="partList.length < 6"
      ></v-button>
    </div>
  </nav>

  <!-- 抽屉区域 -->
  <el-drawer v-model="drawerVisible" :title="titles" :direction="direction" :before-close="handleClose" :lock-scroll="false">
    <dynamic-form :formConfig="baseInfoFormConfig" :value="header.baseInfo" @mychange="baseInfoInput" v-if="titles === '基本信息'"></dynamic-form>
    <dynamic-form :formConfig="contactFormConfig" :value="contactForm" @mychange="contactInput" v-if="titles === '联系方式'"></dynamic-form>
  </el-drawer>

  <!-- 弹窗区域 -->
  <el-dialog v-model="dialogVisible" :title="titles" :lock-scroll="false">
    <template v-for="item in partList" :key="item.id">
      <dynamic-form :formConfig="partFormConfig" :value="item" @mychange="partInput" v-if="item.id === partId"></dynamic-form>
    </template>
  </el-dialog>

  <!-- 新增弹窗区域 -->
  <el-dialog v-model="addDialogVisible" title="添加段落" :lock-scroll="false" @closed="addDialogClosed">
    <dynamic-form :formConfig="addFormConfig" :value="addForm" :key="addFormKey" @mychange="partInput"></dynamic-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addPart">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref, computed, h } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import vHeader from '../components/Header.vue'
import vPart from '../components/detailPart.vue'
import vButton from '../components/Button/Button.vue'
import dynamicForm from '../components/dynamicForm/Form.vue'
import { baseInfo, contact, formItemOption, part, formConfigObject } from '../common/type/index'
import { baseInfoFormConfig, contactFormConfig, partFormConfig, drawerList, partForm, resumerHeader, partList as rePartList } from '../common/api/data'
import { ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    vHeader,
    vPart,
    vButton,
    'dynamic-form': dynamicForm,
  },
  setup() {
    // 页面数据持久化
    //引入store
    const store = useStore(key)
    const header = computed(() => store.state.header)
    const partList = computed(() => store.state.partList)
    const virtualHeader = JSON.parse(JSON.stringify(resumerHeader))
    const virtualPartList = JSON.parse(JSON.stringify(rePartList))
    const resetHeader = () => {
      store.commit('setHeader', virtualHeader)
    }
    const resetPartList = () => {
      store.commit('setPartList', virtualPartList)
    }

    // 点击确认重置数据
    const showConfirm = () => {
      ElMessageBox({
        title: '警告',
        message: h('p', null, [h('span', null, '点击确认重置格式,将'), h('i', { style: 'color: teal' }, '无法恢复')]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 50)
            }, 500)
          } else {
            done()
          }
        },
      }).then(() => {
        // 重置
        resetHeader()
        resetPartList()
        store.commit('reset')
        // 关闭编辑模式
        document.designMode = 'off'
        design.value = false

        ElMessage({
          type: 'success',
          message: `重置成功!!`,
        })
      })
    }

    //关于抽屉,修改基本信息以及联系方式通过表单修改逻辑
    const drawerVisible = ref(false)
    const direction = ref() //抽屉打开方向

    //打开抽屉
    const openDrawer = (title: string, dir: string): void => {
      titles.value = title
      drawerVisible.value = true
      direction.value = dir
    }

    // 抽屉关闭的回调
    const handleClose = (done: FunctionConstructor) => {
      done()
    }

    let formModel = reactive({}) //contact扁平化之后的容器
    // 扁平化contactForm
    let contactForm = computed(() => {
      let form: formItemOption = {}
      for (let i in header.value.contact) {
        form = {
          ...form,
          [header.value.contact[i].key]: header.value.contact[i].href,
        }
      }
      formModel = reactive(form)
      return formModel
    })

    // 通过emit事件修改基本信息和联系方式
    const baseInfoInput = (e: baseInfo) => {
      Object.assign(header.value.baseInfo, e)
    }
    const contactInput = (form: formItemOption) => {
      const newContact = Object.entries(form)
      header.value.contact.forEach((item: contact, i: number) => {
        item.href = newContact[i][1]
        item.value = item.key === 'iPhone' || item.key === 'Email' ? newContact[i][1].slice(newContact[i][1].indexOf(':') + 1) : ''
      })
    }

    // 点击修改主题色

    const changeTheme = () => {
      store.commit('addThemeIndex')
    }
    // 点击修改主题色
    const isInline = ref(true)
    const changeFormat = () => {
      isInline.value = !isInline.value
    }
    // 点击开启编辑模式
    const design = ref(false)
    if (document.designMode === 'off') {
      design.value = false
    }
    const designModel = () => {
      if (document.designMode === 'off') {
        document.designMode = 'on'
        design.value = true
      } else {
        document.designMode = 'off'
        design.value = false
      }
    }

    //关于弹窗逻辑
    const titles = ref() //弹窗标题
    const partId = ref() //段落id
    const dialogVisible = ref(false)

    //关于添加段落的逻辑
    const addDialogVisible = ref(false)
    let addForm: part = reactive({ ...partForm }) //初始化addForm和addFormConfig
    let addFormConfig: formConfigObject = reactive(partFormConfig)
    let addFormKey: Ref<number> = ref(new Date().valueOf()) //初始化key

    //打开弹窗之前
    // 除去HTML标签
    // const strReplace = (str: string | number | undefined) => {
    //   if (str !== '' && str) {
    //     let Str = new String(str)
    //     Str = Str.replaceAll(/<\/?[^>]+>/g, '')
    //     return Str
    //   } else {
    //     return ''
    //   }
    // }
    //打开弹窗
    const openDialog = (title: string, id: number): void => {
      titles.value = title
      partId.value = id
      partFormConfig.formItemList[4].subType = reactive(partList.value[id].partItemList)
      console.log('partFormConfig', partFormConfig)
      // partFormConfig.formItemList[4].subType.forEach((item: any) => {
      //   item.value = strReplace(item.value)
      // })
      console.log('partList', partList.value[id].partItemList)
      dialogVisible.value = true
    }

    const partInput = (part: part) => {
      console.log('part', part)
      // 给描述添加按钮样式
      if (part.subBtnHtml !== '' && part.subBtnHtml && part.subBtnHtml.slice(0, 2) !== '<a' && part.subBtnHtml.slice(-4) !== '</a>') {
        part.subBtnHtml = `<a class="btn item-more" href="" target="_blank" title="${part.mainTitle}">${part.subBtnHtml}</a>`
      }
      //??//给段落描述和段落内容添加按钮和强调样式

      if (addDialogVisible.value) {
        // 新增
        Object.assign(addForm, part)
      } else {
        // 不是新增
        // 修改virtualPartList
        Object.assign(partList.value[part.id], part)
      }
    }

    //打开新增弹窗
    const openAddDialog = () => {
      let id: number
      if (virtualPartList.length === 0) {
        id = 0
      } else {
        id = virtualPartList[virtualPartList.length - 1].id + 1
      }
      // 重置
      addForm = reactive({ ...partForm })
      //将partList最后一项的id+1给新增的作为partId
      addForm.id = id
      addFormConfig.formItemList[4].subType = reactive(partForm.partItemList)

      addDialogVisible.value = true
    }

    // 修改key刷新组件
    const addDialogClosed = () => {
      addFormKey.value = new Date().valueOf()
    }

    //删除
    const deletePart = (partId: number) => {
      const index = partList.value.findIndex((item: part) => item.id === partId)
      partList.value.splice(index, 1)
    }

    const addPart = () => {
      let id: number
      if (partList.value.length === 0) {
        id = 0
      } else {
        id = partList.value[partList.value.length - 1].id + 1
      }

      addForm.id = id
      // 添加
      partList.value.push({ ...addForm })
      addDialogVisible.value = false
    }

    return {
      //数据持久化
      header,
      partList,
      showConfirm,
      //公共的
      titles,
      //抽屉及基本信息与联系方式
      drawerVisible,
      direction,
      baseInfoFormConfig,
      contactForm,
      contactFormConfig,
      openDrawer,
      handleClose,
      baseInfoInput,
      contactInput,
      formModel,
      //弹窗与段落
      partId,
      partFormConfig,
      dialogVisible,
      openDialog,
      partInput,
      //新增弹窗和新增段落
      addDialogVisible,
      openAddDialog,
      addDialogClosed,
      deletePart,
      addPart,
      addForm,
      addFormKey,
      addFormConfig,

      //导航按钮
      drawerList,
      designModel,
      design,

      isInline,
      changeTheme,
      changeFormat,
    }
  },
})
</script>

<style scoped lang="less"></style>
