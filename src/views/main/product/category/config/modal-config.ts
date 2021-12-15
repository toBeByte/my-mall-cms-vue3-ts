import { IForm } from '@/base-ui/form'

export const ModalConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入商品类别'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
