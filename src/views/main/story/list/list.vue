<template>
  <div class="list">
    <page-content
      :ContentTableConfig="ContentTableConfig"
      pageName="story"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { ContentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  components: {
    PageContent
  },
  setup() {
    return { ContentTableConfig }
  }
})
</script>

<style scoped></style>
