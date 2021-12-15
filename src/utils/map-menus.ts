import { IBreadType } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'
let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.拿到所有路由规则
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)

  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])

    allRoutes.push(route.default)
  })

  //2.根据权限动态注册路由
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
// 拿到面包屑的name和url
export function pathMapToBreadcrumb(useMenus: any[], currentPath: string): any {
  const breadcrumbs: IBreadType[] = []
  pathMapToMenu(useMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
// 工具函数，用来匹配当前页面和活跃菜单
export function pathMapToMenu(
  useMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadType[]
): any {
  for (const menu of useMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
// 获取所有按钮权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}
// 获取所有叶子节点，用来回显树结构
export function mapTreeLeafList(menuList: any[]) {
  const LeafList: string[] = []
  const _recurseGetLeaf = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        LeafList.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return LeafList
}
export { firstMenu }
