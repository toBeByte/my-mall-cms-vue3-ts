<template>
  <div class="page-search">
    <wf-form v-bind="SearchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </wf-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WfForm from '@/base-ui/form/index'
export default defineComponent({
  name: '',
  components: {
    WfForm
  },
  props: {
    SearchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的数据应该由配置文件的filed决定
    // 拿到配置文件中的formItems
    const formItems = props.SearchFormConfig?.formItems ?? []
    // 定义一个初始化数据对象
    const formOriginDate: any = {}
    // 遍历拿到所有的对象，拿到所有filed属性
    for (const item of formItems) {
      // 给对象内添加属性，都设为空字符串
      formOriginDate[item.filed] = ''
    }
    // 把值绑定到forDate传给form组件
    const formData = ref(formOriginDate)
    // 点击重置按钮，把forDate重新赋值为初始化对象
    const handleResetClick = () => {
      formData.value = formOriginDate
      emit('resetBtnClick')
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>
<style lang="less" scoped>
.page-search {
  background-color: #fff;
  border-radius: 5px;
}
.header {
  text-align: left;
  margin: 0;
  padding-left: 20px;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 30px 0;
}
</style>
