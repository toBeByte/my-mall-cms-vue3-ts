<template>
  <div class="department">
    <page-search
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :ContentTableConfig="ContentTableConfig"
      pageName="department"
      createName="新建部门"
      @newBtnClick="handleNewBtn"
      @editBtnClick="handleEditBtn"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :ModalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { SearchFormConfig } from './config/search-config'
import { ContentTableConfig } from './config/content-config'
import { ModalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { useStore } from '@/store'
export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    const dialogTitle: string[] = ['新建部门', '编辑部门']
    const [defaultInfo, pageModalRef, handleNewBtn, handleEditBtn] =
      usePageModal(dialogTitle)
    const store = useStore()

    const modalConfigRef = computed(() => {
      const parentIdItem = ModalConfig.formItems?.find(
        (item) => item.filed === 'parentId'
      )
      parentIdItem!.options = store.state.allDepartments.map((item) => {
        return { title: item.name, value: item.id }
      })

      return ModalConfig
    })
    return {
      //page-search
      SearchFormConfig,
      handleResetBtnClick,
      handleQueryBtnClick,
      // page-content
      ContentTableConfig,
      pageContentRef,
      handleNewBtn,
      handleEditBtn,
      // page-modal
      modalConfigRef,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
