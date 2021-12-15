import { IForm } from '@/base-ui/form'

export const ModalConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      filed: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    },
    {
      filed: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
