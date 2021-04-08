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
