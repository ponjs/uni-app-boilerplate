# Boilerplate

`uni-app` 的 `Typescript` 模板。该模板已配置好企业项目中常用功能，例如 API 集中管理、路由守卫、eslint 代码规范等等。您也可以直接使用或是按照下面教程一步步搭建。

## 主要依赖

- [eslint](https://eslint.bootcss.com/)
- [prettier](https://prettier.io/docs/en/options.html)
- [tailwindcss](http://tailwind.wyz.xyz/)
- [uni-ajax](https://uniajax.ponjs.com/)
- [uni-simple-router](https://hhyang.cn/v2/)
- [uview-ui](https://uviewui.com/)
- [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)

## [搭建项目](https://uniapp.dcloud.io/quickstart-cli)

```bash
vue create -p dcloudio/uni-preset-vue boilerplate

# ? 请选择 uni-app 模板:
#   默认模板(TypeScript)
```

## [配置 typescript](https://ponjs.com/archives/44.html)

## [配置 eslint](https://ponjs.com/archives/48.html)

## [配置 tailwindcss](https://ponjs.com/archives/46.html)

## [配置 uni-simple-router](https://hhyang.cn/v2/start/quickstart.html)

## [配置 uview-ui](https://uviewui.com/components/npmSetting.html)

## [自定义环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)

在项目根目录新建 `.env.mode` 文件，这里的 `mode` 为环境名称，可以自定义名称。在该文件中的变量名要以 `VUE_APP_` 开头，通过 `process.env` 获取。然后你可以执行下面命令对指定平台指定环境编译。默认下没有指定环境时直接执行 `dev:%PLATFORM%` 是 `development` 环境，`build:%PLATFORM%` 是 `production` 环境。

```bash
# yarn
yarn dev:%PLATFORM% --mode %ENV%
yarn build:%PLATFORM% --mode %ENV%

# npm
npm run dev:%PLATFORM% -- --mode %ENV%
npm run build:%PLATFORM% -- --mode %ENV%
```
