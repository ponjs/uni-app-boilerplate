<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
})
</script>

<style lang="scss">
@import 'tailwindcss/tailwind.css';
@import 'uview-ui/index.scss';
@import './styles/globals.scss';
</style>
