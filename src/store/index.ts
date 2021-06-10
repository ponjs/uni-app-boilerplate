import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import App from './app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: App
  }
})

export default store

export const AppModule = getModule(App, store)
