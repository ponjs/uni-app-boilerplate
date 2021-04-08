import { post } from '@/common/request'
import { Test } from './types'

export default {
  test: (data: Test.Req) => post<Test.Res>('test', data)
}
