import { IForm } from '@/base-ui/form/types/types'
// goods搜索框的配置文件
export const SearchFormConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      filed: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入商品地址'
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
