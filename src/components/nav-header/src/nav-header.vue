<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <wf-breadcrumb :breadcrumbs="breadcrumbs"></wf-breadcrumb>
      <user-info class="user"></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import WfBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumb } from '@/utils/map-menus'
import UserInfo from './user-info.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  name: '',
  components: {
    UserInfo,
    WfBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 定义菜单是否折叠的变量
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 处理面包屑相关
    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const useMenus = store.state.login.userMenus
      const currentPath = route.path
      // 工具函数，用来拿到面包屑需要展示的name和url
      return pathMapToBreadcrumb(useMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,

      breadcrumbs
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
