# unplugin-vue-setup-extend

Thanks to [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend).

## Explain
The project is based on [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend) and [unplugin](https://github.com/unjs/unplugin) implementations.

The project applies to vue3 and vue2+composition-api
## Install

```bash
npm i unplugin-vue-setup-extend --save-dev
npm i vue-demi --save
or
yarn add unplugin-vue-setup-extend --dev
yarn add vue-demi 
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import VueSetupExtend from 'unplugin-vue-setup-extend/vite'

export default defineConfig({
  plugins: [
    VueSetupExtend({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VueSetupExtend from 'unplugin-vue-setup-extend/rollup'
export default {
  plugins: [
    VueSetupExtend({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-setup-extend/webpack').default({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-vue-setup-extend/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-setup-extend/webpack').default({ /* options */ }),
    ],
  },
}
```

<br></details>
## Template
```html
<template>
</template>
<script setup lang="ts" name="App">
// You have to have content
</script>
```