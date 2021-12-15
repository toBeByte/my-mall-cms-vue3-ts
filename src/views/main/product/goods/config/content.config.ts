// user content配置文件
export const ContentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '150' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '120', slotName: 'imgUrl' },
    { prop: 'oldPrice', label: '原价格', minWidth: '70', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '70', slotName: 'newPrice' },
    { prop: 'saleCount', label: '出售件数', minWidth: '70' },
    { prop: 'inventoryCount', label: '库存', minWidth: '70' },
    { prop: 'favorCount', label: '收藏', minWidth: '70' },
    { prop: 'address', label: '地址', minWidth: '70' },
    { prop: 'status', label: '状态', minWidth: '70', slotName: 'status' },
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
  showSelectColumn: true
}
