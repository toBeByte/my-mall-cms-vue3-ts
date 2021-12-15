<template>
  <div class="role">
    <page-search
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :ContentTableConfig="ContentTableConfig"
      pageName="role"
      createName="新建权限"
      @newBtnClick="handleNewBtn"
      @editBtnClick="handleEditBtn"
    ></page-content>
    <page-modal
      :ModalConfig="ModalConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :otherInfo="otherInfo"
    >
      <div class="tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { SearchFormConfig } from './config/search-config'
import { ContentTableConfig } from './config/content-config'
import { ModalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { useStore } from '@/store'
import { ElTree } from 'element-plus'
import { mapTreeLeafList } from '@/utils/map-menus'
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const dialogTitle: string[] = ['新建角色', '编辑角色']
    const editCallback = (item: any) => {
      nextTick(() => {
        // ElTree的方法

        const leafKeys = mapTreeLeafList(item.menuList)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    const [defaultInfo, pageModalRef, handleNewBtn, handleEditBtn] =
      usePageModal(dialogTitle, undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.allMenus)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      // 通过...浅拷贝一下,直接使用会出问题
      const menuList = [...checkedKeys, ...halfCheckedKeys]

      otherInfo.value = { menuList }
    }

    return {
      SearchFormConfig,
      ContentTableConfig,
      ModalConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleResetBtnClick,
      handleQueryBtnClick,
      handleNewBtn,
      handleEditBtn,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.tree {
  margin-left: 25px;
}
</style>
