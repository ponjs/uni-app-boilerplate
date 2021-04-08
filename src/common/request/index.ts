import ajax, { AjaxPromise, AjaxRequestConfig } from 'uni-ajax'
import { loading } from './helpers'

/** pending 状态的 Promise，用于避免进入 catch 回调 */
const pending = new Promise<any>(() => {})
/** 请求队列 */
const queue: any[] = []

// 创建请求实例
const instance = ajax.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  xhr: (task: any, config) => {
    task.url = config.url
    const index = queue.findIndex(ele => ele.url === task.url)
    index > -1 && queue.splice(index, 1)[0].abort()
    queue.push(task)
  }
})

// 注册请求拦截器
instance.interceptors.request.use(config => {
  // 默认是有请求加载框，当传入 loading: false 时则不显示
  config.loading !== false && loading.show(config.loadingText)

  return config
})

// 注册响应拦截器
instance.interceptors.response.use(
  response => {
    const { config, data = {} } = response

    // 隐藏请求加载框
    config.loading !== false && loading.hide()

    // 当返回状态码不为 200 时，默认 toast 提示信息，当传入 toast: false 时则不显示
    if (config.toast !== false && data.code !== 200 && data.msg) {
      uni.showToast({
        title: data.msg,
        icon: 'none'
      })
    }

    // then 参数接收的是 (statusCode === 200 && data.code === 200)，其他都丢在 catch 内
    // 如果请求配置传递 catch: true，需用 catch 参数接收异常数据，若是取得接口返回的数据，则通过 .data 获得
    return data.code === 200 ? data : config.catch ? Promise.reject(response) : pending
  },
  error => {
    const { config } = error

    // 隐藏请求加载框
    loading.hide()

    // 如果是中断请求
    if (error.errMsg.includes('abort')) return config.catch ? error : pending

    return config.catch ? error : pending
  }
)

// 接口返回数据类型
interface ResponseMessage<T = any> {
  code: number
  msg: string
  data: T
}

type Request = <T = any>(
  url: string,
  data?: any,
  config?: AjaxRequestConfig
) => AjaxPromise<ResponseMessage<T>>

export const { get, post } = instance as Record<'get' | 'post', Request>

export default instance
