import { ComponentOptions } from 'vue'
import { RoutesRule } from 'uni-simple-router'

declare module 'vue/types/vue' {
  interface Vue extends ComponentOptions<Vue> {}
}

declare global {
  const ROUTES: RoutesRule[]
}
