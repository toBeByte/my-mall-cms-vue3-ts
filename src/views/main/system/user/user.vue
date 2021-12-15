<template>
  <div class="user">
    <page-search
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :ContentTableConfig="ContentTableConfig"
      pageName="users"
      createName="新建用户"
      @newBtnClick="handleNewBtn"
      @editBtnClick="handleEditBtn"
    >
      <template #status="scope">
        <el-button
          :type="scope.row.enable === 1 ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.enable === 1 ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :ModalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { SearchFormConfig } from './config/search-config'
import { ContentTableConfig } from './config/content-config'
import { ModalConfig } from './config/modal-config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // pageSearch相关hook
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    // pageModal相关hook
    const dialogTitle: string[] = ['新建用户', '编辑用户']
    // 新建列表密码显示
    const newCallback = () => {
      const passwordItem = ModalConfig.formItems.find(
        (item) => item.filed === 'password'
      )
      passwordItem!.isHidden = false
    }
    // 编辑列表密码隐藏
    const editCallback = () => {
      const passwordItem = ModalConfig.formItems.find(
        (item) => item.filed === 'password'
      )
      passwordItem!.isHidden = true
    }
    const [defaultInfo, pageModalRef, handleNewBtn, handleEditBtn] =
      usePageModal(dialogTitle, newCallback, editCallback)
    // 动态添加角色和部门列表
    const store = useStore()
    // 把modalConfig配置通过computed变成响应式
    // 当vuex数据请求来，modalConfig中数据更新，页面数据更新
    const modalConfigRef = computed(() => {
      const departmentItem = ModalConfig.formItems.find(
        (item) => item.filed === 'departmentId'
      )
      departmentItem!.options = store.state.allDepartments.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = ModalConfig.formItems.find(
        (item) => item.filed === 'roleId'
      )
      roleItem!.options = store.state.allRoles.map((item) => {
        return { title: item.name, value: item.id }
      })
      return ModalConfig
    })
    return {
      defaultInfo,
      SearchFormConfig,
      ContentTableConfig,
      modalConfigRef,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageModalRef,
      handleNewBtn,
      handleEditBtn
    }
  }
})
</script>

<style lang="less" scoped></style>
