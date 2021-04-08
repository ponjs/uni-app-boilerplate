import { ComponentOptions } from 'vue'

declare module 'vue/types/vue' {
  interface Vue extends ComponentOptions<Vue> {}
}
