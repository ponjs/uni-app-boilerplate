module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  separator: '__', // 兼容小程序，将 : 替换成 __
  theme: {
    // 兼容小程序，将默认配置里带 .和/ 清除
    // 如果有些属性你没有用到，请在 corePlugins 里禁用
    extend: {},
    fontSize: {
      36: '36rpx'
    },
    height: {},
    inset: {},
    screens: {},
    spacing: {},
    translate: {},
    width: {}
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 兼容小程序，将带有 * 选择器的插件禁用
    preflight: false,
    space: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false
  }
}
