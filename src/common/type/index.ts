/*
 * @Author: 龙际妙
 * @Date: 2021-12-11 00:42:17
 * @Description:
 * @FilePath: \resume-ts-template\src\common\type\index.ts
 * @LastEditTime: 2021-12-12 02:26:43
 * @LastEditors: Please set LastEditors
 */
interface baseInfo {
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
interface contact {
  key: string
  value: string
  href: string
  icon: string
}
interface header {
  baseInfo: baseInfo
  contact: Array<contact>
}

interface buttonItem {
  title: string
  bottom: number
  direction: string
}

interface formConfigObject {
  inline?: boolean
  labelPosition: string
  labelWidth: string
  size: string
  statusIcon?: boolean
  formItemList: Array<formItemConfig>
}
interface formItemConfig {
  type: string
  label: string
  disable?: boolean
  readonly?: boolean
  value: string
  placeholder: string
  rules?: Map<string, Array<rule> | rule>
  key: string
  subType: string
}
export interface formItemOption {
  [index: string]: string
}

export interface selectOptions {
  [index: number]: formItemOption
}

export interface rule {
  required: boolean
  message: string
  trigger: string
}

export interface hdcontext {
  name: string
  time: string
  btn: string
}
export interface items {
  name: string
  time: string
  btn: string
  value: string
  tags: unknown
}
export { buttonItem, baseInfo, contact, header, formConfigObject, formItemConfig }
