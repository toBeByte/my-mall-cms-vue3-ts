<template>
  <div class="category">
    <page-search
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :ContentTableConfig="ContentTableConfig"
      pageName="category"
      createName="新建类别"
      @newBtnClick="handleNewBtn"
      @editBtnClick="handleEditBtn"
    >
      ></page-content
    >
    <page-modal
      ref="pageModalRef"
      :ModalConfig="ModalConfig"
      pageName="category"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { SearchFormConfig } from './config/search-config'
import { ContentTableConfig } from './config/content.config'
import { ModalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'category',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const dialogTitle = ['新建类别', '编辑类别']
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    const [defaultInfo, pageModalRef, handleNewBtn, handleEditBtn] =
      usePageModal(dialogTitle)
    return {
      SearchFormConfig,
      ContentTableConfig,
      ModalConfig,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageModalRef,
      handleNewBtn,
      handleEditBtn,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
