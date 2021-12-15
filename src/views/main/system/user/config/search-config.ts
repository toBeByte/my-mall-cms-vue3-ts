import { IForm } from '@/base-ui/form/types/types'
// user搜索框的配置文件
export const SearchFormConfig: IForm = {
  formItems: [
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      filed: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      filed: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      filed: 'createAt',
      type: 'datePicker',
      label: '创建时间',
      placeholder: '选择创建的时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  },
  labelWidth: '100px',
  colLayout: {
    xl: 6, // >1920 4个
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}
