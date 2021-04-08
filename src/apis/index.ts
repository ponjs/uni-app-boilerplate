import { VueConstructor } from 'vue'
import Test from './test'

const apis = {
  Test
}

export declare type Apis = typeof apis

const install = (app: VueConstructor) => (app.prototype.$apis = apis)

export default install
