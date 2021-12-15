<template>
  <div class="story">
    <wf-editor v-model:value="htmlStr"></wf-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WfEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'story',
  components: {
    WfEditor
  },
  setup() {
    const htmlStr = ref<string>('coderwhy永远的神')
    return { htmlStr }
  }
})
</script>

<style scoped></style>
