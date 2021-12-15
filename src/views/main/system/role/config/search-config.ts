import { IForm } from '@/base-ui/form/types/types'
// user搜索框的配置文件
export const SearchFormConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
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
  ]
}
