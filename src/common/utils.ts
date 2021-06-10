import { VueConstructor } from 'vue'

/** 显示消息提示框 */
export function toast(title: string, options?: UniApp.ShowToastOptions) {
  uni.showToast({
    ...options,
    title,
    icon: 'none'
  })
}

/** 显示成功消息提示框 */
toast.success = function (title: string, options?: UniApp.ShowToastOptions) {
  uni.showToast({
    ...options,
    title,
    icon: 'success'
  })
}

interface Modal {
  (options: UniApp.ShowModalOptions): Promise<boolean>
  (content: string, options?: UniApp.ShowModalOptions): Promise<boolean>
  (content: string, title?: string, options?: UniApp.ShowModalOptions): Promise<boolean>
}

/** 显示模态弹窗 */
export const modal: Modal = (
  content: string | UniApp.ShowModalOptions,
  title?: string | UniApp.ShowModalOptions,
  options?: UniApp.ShowModalOptions
) => {
  return new Promise<boolean>((resolve, reject) => {
    let params: UniApp.ShowModalOptions
    if (typeof content === 'object') {
      params = content
    } else if (typeof title === 'object') {
      params = { ...title, content }
    } else {
      params = { ...options, title, content }
    }

    uni.showModal({
      ...params,
      success: res => {
        if (res.confirm) resolve(true)
        else if (res.cancel) resolve(false)
      },
      fail: reject
    })
  })
}

/** 显示加载提示框 */
export function loading(title = '加载中', mask = true) {
  uni.showLoading({
    title,
    mask
  })
}

/** 导出 Vue.use 调用方法 */
export function install(app: VueConstructor) {
  // 挂载实例方法后 需在 shims-sfc.d.ts 里声明该方法类型
  app.prototype.$util = module.exports
}
