// vuex和ts契合度不好，我们自己封装一下vuex
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import analysis from './main/analysis/analysis'

import { IRootState, IStoreType } from './types'
import { getPageListData } from '@/service/main/system/system'

// 创建一个新的根store
const store = createStore<IRootState>({
  state() {
    return {
      allDepartments: [],
      allRoles: [],
      allMenus: []
    }
  },
  mutations: {
    changeDepartmentData(state, departmentList: any) {
      state.allDepartments = departmentList
    },
    changeRoleData(state, roleList: any) {
      state.allRoles = roleList
    },
    changeMenuData(state, menuList: any) {
      state.allMenus = menuList
    }
  },
  getters: {},
  actions: {
    // 全局拿到部门,角色列表和菜单列表
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const menuResult = await getPageListData('/menu/list', {
        offset: 0,
        size: 100
      })

      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data
      const { list: menuList } = menuResult.data

      commit('changeDepartmentData', departmentList)
      commit('changeRoleData', roleList)
      commit('changeMenuData', menuList)
    }
  },
  modules: {
    login,
    system,
    analysis
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // 在login中发送请求
  // store.dispatch('getInitialDataAction')
}

// 把vuex useStore修改为我们自己定义类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
