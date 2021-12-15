import hyRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  amountList = '/goods/amount/list'
}
export function getCategoryCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategorySale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressSale() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
export function getAmountList() {
  return hyRequest.get({
    url: DashboardAPI.amountList
  })
}
