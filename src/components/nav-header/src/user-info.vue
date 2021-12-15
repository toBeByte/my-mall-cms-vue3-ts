<template>
  <el-dropdown>
    <span class="user-info">
      <el-avatar :size="30">
        <img src="@/assets/img/avatar.jpg" />
      </el-avatar>
      <span>{{ name }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
        <el-dropdown-item divided icon="el-icon-bell"
          >系统消息</el-dropdown-item
        >
        <el-dropdown-item divided icon="el-icon-circle-close" @click="backLogin"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import cache from '@/utils/cache'
export default defineComponent({
  name: '',
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    // 退出登录逻辑
    const backLogin = () => {
      router.push('/login')
      cache.deleteCache('userInfo')
      cache.deleteCache('userMenus')
      cache.deleteCache('token')
    }
    return {
      name,
      backLogin
    }
  }
})
</script>
<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-avatar {
    margin-right: 5px;
  }
}
</style>
