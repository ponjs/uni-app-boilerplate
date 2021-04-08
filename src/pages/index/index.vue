<template>
  <view class="flex flex-col items-center justify-center">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title text-36">{{ name }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { App } from '@/store'

@Component
export default class Index extends Vue {
  get name() {
    return App.name
  }

  async testApi() {
    const { data } = await this.$apis.Test.test({ val: '' })
    console.log(data)
  }
}
</script>

<style>
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.title {
  color: #8f8f94;
}
</style>
