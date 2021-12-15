<template>
  <div class="wf-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadType } from '@/base-ui/breadcrumb/types'
export default defineComponent({
  name: '',
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadType[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped></style>
