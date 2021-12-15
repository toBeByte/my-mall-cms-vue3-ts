import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CbFn = (item?: any) => void
export function usePageModal(
  dialogTitle: string[],
  newCb?: CbFn,
  editCb?: CbFn
) {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleNewBtn = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.title = dialogTitle[0]
    }
    newCb && newCb()
  }
  const handleEditBtn = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.title = dialogTitle[1]
    }

    editCb && editCb(item)
  }
  return [defaultInfo, pageModalRef, handleNewBtn, handleEditBtn]
}
