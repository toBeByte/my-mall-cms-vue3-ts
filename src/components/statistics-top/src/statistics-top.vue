<template>
  <div class="statistics-top">
    <div class="header">
      <span>{{ topPanelData.title }}</span>
      <el-tooltip :content="topPanelData.tips" placement="top" effect="light">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </div>
    <div class="content">
      <wf-count-up
        :number="topPanelData.number1"
        :options="
          topPanelData.amount === 'saleroom' ? counterOption2 : counterOption1
        "
      ></wf-count-up>
    </div>
    <div class="footer">
      <span>
        {{ topPanelData.subtitle }}
        <wf-count-up
          :number="topPanelData.number2"
          :options="
            topPanelData.amount === 'saleroom' ? counterOption2 : counterOption1
          "
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WfCountUp from '@/base-ui/count-up'
export default defineComponent({
  components: {
    WfCountUp
  },
  props: {
    topPanelData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const counterOption1 = {
      decimalPlaces: 0, // 保留两位
      prefix: '' // 单位
    }
    const counterOption2 = {
      decimalPlaces: 0, // 保留两位
      prefix: '￥' // 单位
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>
<style lang="less" scoped>
@h: 38px;

.statistics-top {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);

  height: 130px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: left;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
