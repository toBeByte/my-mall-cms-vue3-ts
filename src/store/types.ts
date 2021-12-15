import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashBoardState } from './main/analysis/types'

// 根store中state类型
export interface IRootState {
  allDepartments: any[]
  allRoles: any[]
  allMenus: any[]
}

// 限制根store中的模块类型
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  analysis: IDashBoardState
}

export type IStoreType = IRootState & IRootWithModule
