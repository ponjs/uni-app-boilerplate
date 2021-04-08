import Vue from 'vue'
import App from './App.vue'
import { RouterMount, router } from './router'

Vue.use(router)

Vue.config.productionTip = false

const app = new App()

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif
