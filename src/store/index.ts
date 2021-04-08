import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppModule from './app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: AppModule
  }
})

export default store

export const App = getModule(AppModule, store)
