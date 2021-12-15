<template>
  <div class="page-content">
    <wf-table
      :list-date="dataList"
      v-bind="ContentTableConfig"
      :list-count="dataCount"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate && createName !== '新建菜单'"
          type="primary"
          size="medium"
          class="el-icon-plus"
          @click="newBtnClick"
          >&nbsp;{{ createName }}</el-button
        >
      </template>
      <!-- 列表中的插槽 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle="scope">
        <el-button
          v-if="isUpdate"
          type="text"
          class="el-icon-edit"
          @click="editBtnClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          v-if="isDelete"
          type="text"
          class="el-icon-delete delete-btn"
          @click="handleDeleteBtn(scope.row)"
          :disabled="pageName === 'goods'"
          >删除</el-button
        >
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </wf-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import WfTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

import { ElMessageBox, ElMessage } from 'element-plus'
export default defineComponent({
  name: '',
  components: {
    WfTable
  },
  props: {
    ContentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    createName: {
      type: String,
      default: '新建'
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 判断是否有权限按钮
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    const store = useStore()
    // 动态绑定pageInfo
    const pageInfo = ref({ pageSize: 10, currentPage: 1 })
    // 双向绑定，当table内pageInfo变化，重新发送网络请求
    watch(pageInfo, () => getPageData())
    // 提交获取数据请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return false
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        // 动态绑定queryInfo
        queryInfo: {
          offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    // 获取数据
    getPageData()

    // 获取数据列表和数据数量(分页器数据)
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    const dataCount = computed(() =>
      // dataList.value.length
      store.getters[`system/pageCountData`](props.pageName)
    )

    // 获取传过来的，除了公共插槽以外的其他插槽
    const otherPropSlots = props.ContentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handle') return false
        return true
      }
    )

    const selectionChange = (value: any) => {
      console.log(value, '处理选中后的相关数据')
    }

    // 点击删除相关操作,用messageBox提示框，友好提示一下
    const handleDeleteBtn = (item: any) => {
      ElMessageBox.confirm('确定删除该条记录吗', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          store.dispatch('system/deletePageDateAction', {
            pageName: props.pageName,
            id: item.id
          })
          ElMessage({
            type: 'success',
            message: '删除成功'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除'
          })
        })
    }
    // 点击新建和编辑
    const newBtnClick = () => {
      emit('newBtnClick')
    }
    const editBtnClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      // wf-table
      dataList,
      dataCount,
      pageInfo,
      getPageData,
      otherPropSlots,
      // 选中后的操作，暂时没用到
      selectionChange,
      // 新建中的插槽
      isCreate,
      newBtnClick,
      // 编辑
      isUpdate,
      editBtnClick,
      // 删除
      isDelete,
      handleDeleteBtn
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  background-color: #fff;
  border-radius: 5px;
}
.delete-btn {
  color: rgb(235, 124, 124);
}
</style>
