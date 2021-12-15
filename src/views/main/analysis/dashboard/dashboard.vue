<template>
  <div class="dashboard">
    <!-- 顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistics-top :topPanelData="item"></statistics-top>
        </el-col>
      </template>
    </el-row>
    <!-- echarts部分 -->
    <el-row :gutter="10">
      <el-col :span="7"
        ><wf-card title="分类商品数量(饼图)"
          ><pie-echart :pieData="categoryCount"></pie-echart></wf-card
      ></el-col>
      <el-col :span="10"
        ><wf-card title="不同城市商品销量"
          ><map-echart :mapData="addressSale"></map-echart></wf-card
      ></el-col>
      <el-col :span="7">
        <wf-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryCount"></rose-echart> </wf-card
      ></el-col>
    </el-row>
    <div class="down-content">
      <el-row :gutter="10">
        <el-col :span="12"
          ><wf-card title="分类商品的销量"
            ><line-echart v-bind="categorySale"></line-echart></wf-card
        ></el-col>
        <el-col :span="12"
          ><wf-card title="分类商品的收藏"
            ><bar-echart v-bind="categoryFavor"></bar-echart></wf-card
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import WfCard from '@/base-ui/card'
import StatisticsTop from '@/components/statistics-top'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'
import { useStore } from '@/store'
export default defineComponent({
  name: 'dashboard',
  components: {
    WfCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticsTop
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction')

    // 顶部数据统计展示数据
    const topPanelData = computed(() => {
      return store.state.analysis.topPanelData
    })

    // echarts所用数据
    const categoryCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categorySale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const lineData = store.state.analysis.categoryGoodsSale

      for (const item of lineData) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const favorData = store.state.analysis.categoryGoodsFavor

      for (const item of favorData) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressSale = computed(() => {
      return store.state.analysis.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      topPanelData,
      categoryCount,
      categorySale,
      categoryFavor,
      addressSale
    }
  }
})
</script>

<style scoped>
.down-content {
  margin-top: 10px;
}
</style>
