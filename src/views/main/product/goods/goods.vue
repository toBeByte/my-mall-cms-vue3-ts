<template>
  <div class="goods">
    <page-search
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      :ContentTableConfig="ContentTableConfig"
      pageName="goods"
      ref="pageContentRef"
      createName="新建商品"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #status="scope">
        <el-button
          :type="scope.row.status === 1 ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.status === 1 ? '上架中' : '下架中' }}</el-button
        >
      </template>
      <template #oldPrice="scope"> {{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope"> {{ '￥' + scope.row.newPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { SearchFormConfig } from './config/search-config'
import { ContentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    return {
      SearchFormConfig,
      ContentTableConfig,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick
    }
  }
})
</script>

<style scoped></style>
