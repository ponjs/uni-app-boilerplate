<template>
  <view class="flex flex-col items-center justify-center">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title text-36">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  title = 'Hello'
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
