import Vue from 'vue'
import App from './App.vue'
import uview from 'uview-ui'
import { RouterMount, router } from './router'
import store from './store'
import apis from './apis'
import utils from './common/utils'

Vue.use(router).use(uview).use(apis).use(utils)

Vue.config.productionTip = false

const app = new App({
  store
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif
