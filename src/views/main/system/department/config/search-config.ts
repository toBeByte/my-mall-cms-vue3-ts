import { IForm } from '@/base-ui/form/types/types'
// user搜索框的配置文件
export const SearchFormConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      filed: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
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
