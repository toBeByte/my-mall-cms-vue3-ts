// menu content配置文件
export const ContentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '150' },
    { prop: 'type', label: '类型', minWidth: '80' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { prop: 'select', label: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showNewButton: false,
  showFooter: false
}
