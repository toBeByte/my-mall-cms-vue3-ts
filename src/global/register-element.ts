import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubmenu,
  ElTabPane,
  ElTabs,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
  ElAvatar,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRow,
  ElCol,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip,
  ElDescriptions,
  ElTag,
  ElDescriptionsItem
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
  ElAvatar,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElCol,
  ElRow,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
