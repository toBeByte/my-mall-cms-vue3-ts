import { Module } from 'vuex'
// 根store类型
import { IRootState } from '@/store/types'
// 自己数据的类型
import { ISystemState } from './types'
// 封装的发送网络请求
import {
  getPageListData,
  getDeleteData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

// system模块
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      departmentCount: 0,
      departmentList: [],
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0,
      menuList: [],
      menuCount: 0,
      storyList: [],
      storyCount: 0
    }
  },
  mutations: {
    // 处理数据保存到state中
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeCategoryList(state, categoryList: any[]) {
      state.categoryList = categoryList
    },
    changeCategoryCount(state, categoryCount: number) {
      state.categoryCount = categoryCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
    changeStoryList(state, storyList: any[]) {
      state.storyList = storyList
    },
    changeStoryCount(state, storyCount: number) {
      state.storyCount = storyCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 获取页面数据
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 1.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 拿到数据
      const { list, totalCount } = pageResult.data
      // 提交数据
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    // 删除页面数据
    async deletePageDateAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await getDeleteData(pageUrl)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 100
        }
      })
    },
    // 创建数据
    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 2.请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 100
        }
      })
    },
    // 编辑修改数据
    async editPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 2.请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 100
        }
      })
    }
  }
}
export default systemModule
