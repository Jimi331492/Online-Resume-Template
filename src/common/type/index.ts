/*
 * @Author: 龙际妙
 * @Date: 2021-12-11 00:42:17
 * @Description:
 * @FilePath: \resume-ts-template\src\common\type\index.ts
 * @LastEditTime: 2021-12-12 18:49:05
 * @LastEditors: Please set LastEditors
 */
export interface baseInfo {
  name: string //姓名
  E_name: string //英文名
  sex: string //性别
  birth: string //生日
  hometown: string //籍贯
  edu: string //学历
  edu_time: string //毕业时间
  school: string //学校
  school_url: string //官网链接
  subject: string //专业
  job: string //应聘职位
}
export interface contact {
  key: string
  value: string
  href: string
  icon: string
}
export interface header {
  baseInfo: baseInfo
  contact: Array<contact>
}

export interface partItem {
  title?: string
  remark?: string
  btnHtml?: string
  value: string
  tags: formItemOption
}
export interface part {
  mainTitle: string
  subTitle?: string
  subRemark?: string
  subBtnHtml?: string
  partItemList: Array<partItem>
}

export interface buttonItem {
  title: string
  bottom: number
  direction: string
}

export interface formConfigObject {
  labelPosition: string
  labelWidth: string
  size: string
  formItemList: Array<formItemConfig>
}
export interface formItemConfig {
  type: string
  label: string
  disable?: boolean
  readonly?: boolean
  value: string
  placeholder: string
  key: string
  subType: string
}
export interface formItemOption {
  [index: string]: string
}

export interface selectOptions {
  [index: number]: formItemOption
}
