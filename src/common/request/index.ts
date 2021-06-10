import ajax, { AjaxRequestConfig, AjaxRequestTask, Request } from 'uni-ajax'
import { loading, offlineModal } from './helpers'
import { toast } from '../utils'

/** pending 状态的 Promise，用于避免进入 catch 回调 */
const pending = new Promise<any>(() => {})
/** 请求队列 */
const queue: CustomTask[] = []

// 创建请求实例
const instance = ajax.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // 处理连续的重复请求
  xhr: (task: CustomTask, config) => {
    task.url = config.url
    const index = queue.findIndex(ele => ele.url === task.url)
    index > -1 && queue.splice(index, 1)[0].abort()
    queue.push(task)
  }
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 默认是有请求加载框，当传入 loading: false 时则不显示
  config.loading !== false && loading.show(config.loadingText)

  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    const { config, data = {} } = response

    // 隐藏请求加载框
    config.loading !== false && loading.hide()

    // 当返回状态值不为 0 时，默认 toast 提示信息，当传入 toast: false 时则不显示
    config.toast !== false && data.code !== 0 && data.msg && toast(data.msg)

    // then 参数接收的是 (statusCode === 200 && data.code === 0) 时的 data 数据，其他都丢在 catch 内
    // 如果请求配置传递 catch: true，需用 catch 参数接收异常数据，若是取得接口返回的数据，则通过 .data 获得
    return data.code === 0 ? data : config.catch ? Promise.reject(response) : pending
  },
  error => {
    const { config } = error

    // 隐藏请求加载框
    loading.hide()

    // 中断请求
    if (error.errMsg?.includes('abort')) return config.catch ? Promise.reject(error) : pending

    // 没有状态码返回通常没有网络
    !error.statusCode && offlineModal()

    return config.catch ? Promise.reject(error) : pending
  }
)

// 请求队列中赋值 url 的 RequestTask 类型
interface CustomTask extends AjaxRequestTask {
  url?: string
}

// 接口实际返回数据类型
interface CustomResponse<T = any> {
  code: number
  msg: string
  data: T
}

// 根据实际接口返回数据类型重新定义请求方法类型
type CustomtInvoke = <T = any>(
  url: string,
  data?: any,
  config?: AjaxRequestConfig
) => Request<CustomResponse<T>>

export const { get, post } = instance as { get: CustomtInvoke; post: CustomtInvoke }

export default instance
