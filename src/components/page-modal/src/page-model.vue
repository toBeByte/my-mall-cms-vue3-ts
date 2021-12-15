<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <wf-form v-bind="ModalConfig" v-model="formData"></wf-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmBtn">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import WfForm from '@/base-ui/form'
import { useStore } from '@/store'
export default defineComponent({
  name: '',
  components: {
    WfForm
  },
  props: {
    ModalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const title = ref('')
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.ModalConfig.formItems) {
          formData.value[`${item.filed}`] = newVal[`${item.filed}`]
        }
      }
    )
    const store = useStore()

    const handleConfirmBtn = () => {
      dialogVisible.value = false

      if (Object.keys(props.defaultInfo).length) {
        // 编辑用户逻辑

        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建用户逻辑
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return { dialogVisible, formData, handleConfirmBtn, title }
  }
})
</script>
<style lang="less" scoped></style>
