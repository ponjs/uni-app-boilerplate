import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'app' })
export default class App extends VuexModule {
  name: string = process.env.VUE_APP_APP_NAME
}