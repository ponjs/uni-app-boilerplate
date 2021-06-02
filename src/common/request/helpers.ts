/** 请求加载提示框 */
class Loading {
  private timer?: number
  private visible?: boolean
  show(title?: string) {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.visible = true
      uni.showLoading({
        title: title || '加载中',
        mask: true
      })
    }, 800)
  }
  hide() {
    clearTimeout(this.timer)
    if (this.visible) {
      uni.hideLoading()
      this.visible = false
    }
  }
}

export const loading = new Loading()

/** 无网络模态框 */
export function offlineModal() {
  if (offlineModal.show) return
  offlineModal.show = true
  uni.showModal({
    title: '无法连接服务器',
    content: '请检查网络是否正常',
    confirmText: '我知道了',
    showCancel: false,
    success: ({ confirm }) => (offlineModal.show = !confirm)
  })
}
/** 无网络模态框显示状态，避免出现多个模态框 */
offlineModal.show = false
