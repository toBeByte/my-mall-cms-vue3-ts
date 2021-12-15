import { IForm } from '@/base-ui/form'

export const ModalConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      filed: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {},
  labelWidth: '80px'
}
