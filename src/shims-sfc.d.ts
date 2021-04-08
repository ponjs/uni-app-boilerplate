import { ComponentOptions } from 'vue'
import { RoutesRule } from 'uni-simple-router'

declare module 'vue/types/vue' {
  interface Vue extends ComponentOptions<Vue> {
    $u: any
  }
}

declare global {
  const ROUTES: RoutesRule[]
}
