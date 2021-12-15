// category content配置文件
export const ContentTableConfig = {
  title: '商品类别',
  propList: [
    { prop: 'name', label: '商品类别', minWidth: '150' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    { prop: 'select', label: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
