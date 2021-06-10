import { Module, VuexModule } from 'vuex-module-decorators'

export interface AppModule {
  name: string
}

@Module({ name: 'app', namespaced: true })
export default class App extends VuexModule implements AppModule {
  name: string = process.env.VUE_APP_APP_NAME || ''
}
