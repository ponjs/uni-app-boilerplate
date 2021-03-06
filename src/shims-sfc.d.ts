import { ComponentOptions } from 'vue'
import { RoutesRule } from 'uni-simple-router'
import { Apis } from './apis'
import * as utils from './common/utils'

declare module 'vue/types/vue' {
  interface Vue extends ComponentOptions<Vue> {
    /** uview-ui */
    $u: any
    /** API Management */
    $apis: Apis
    /** Util Methods */
    $util: typeof utils
  }
}

declare global {
  declare const ROUTES: RoutesRule[]
}

declare module 'uni-ajax' {
  interface AjaxRequestConfig {
    /** 发起请求 800ms 后，是否显示 loading 提示框。默认：true */
    loading?: boolean
    /** 发起请求 800ms 后显示 loading 提示框的文字。默认：加载中 */
    loadingText?: string
    /** 返回 code !== 0 时，是否 toast 提示 code !== 0 时的 msg 信息。默认：true */
    toast?: boolean
    /** 是否返回异常，如果是 true，则异常数据需用 catch 捕捉，否则不返回异常数据。默认：false */
    catch?: boolean
  }
}
