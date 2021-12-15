<template>
  <div class="wf-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'
import { IFormItem } from '../types/types'
export default defineComponent({
  name: '',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 当输入数据改变触发update:modelValue事件调用handleValueChange函数
    const handleValueChange = (value: any, filed: string) => {
      // ...props.modelValue解构拿到传过来的值
      // [filed]: value 把改变的字段重新赋值
      emit('update:modelValue', { ...props.modelValue, [filed]: value })
    }
    watch(
      props.modelValue,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return { handleValueChange }
  }
})
</script>
<style lang="less" scoped>
.wf-form {
  padding-top: 22px;
}
</style>
