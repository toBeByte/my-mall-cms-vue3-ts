<template>
  <div class="base-echarts">
    <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import { useEcharts } from '../hooks/useEcharts'
const echartsDivRef = ref<HTMLElement>()

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
onMounted(() => {
  const { setOptions } = useEcharts(echartsDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
<style lang="less" scoped></style>
