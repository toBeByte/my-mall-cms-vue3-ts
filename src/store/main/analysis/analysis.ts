import { Module } from 'vuex'
import { IRootState } from '../../types'
import { IDashBoardState } from './types'
import {
  getCategoryCount,
  getCategorySale,
  getCategoryFavor,
  getAddressSale,
  getAmountList
} from '@/service/main/analysis/analysis'

const analysisModule: Module<IDashBoardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelData: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeTopPanelData(state, list) {
      state.topPanelData = list
    },
    changeCategoryCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategorySale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const topPanelDataResult = await getAmountList()
      commit('changeTopPanelData', topPanelDataResult.data)
      const categoryCountResult = await getCategoryCount()
      commit('changeCategoryCount', categoryCountResult.data)
      const categorySaleResult = await getCategorySale()
      commit('changeCategorySale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryFavor()
      commit('changeCategoryFavor', categoryFavorResult.data)
      const addressSaleResult = await getAddressSale()
      commit('changeAddressSale', addressSaleResult.data)
    }
  }
}

export default analysisModule
