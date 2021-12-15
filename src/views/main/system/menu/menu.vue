<template>
  <div class="menu">
    <page-content
      :ContentTableConfig="ContentTableConfig"
      pageName="menu"
      createName="新建菜单"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { ContentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'wf-menu',
  components: {
    PageContent
  },
  setup() {
    return { ContentTableConfig }
  }
})
</script>

<style scoped></style>
