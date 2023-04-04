# unplugin-vue-setup-extend

Thanks to [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend).

## Explain

Name support for setup syntax sugar

The project is based on [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend) and [unplugin](https://github.com/unjs/unplugin) implementations.

The project applies to vue3 and vue2+composition-api

## Install

```bash
npm i unplugin-vue-setup-extend --save-dev
or
yarn add unplugin-vue-setup-extend --dev
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import VueSetupExtend from "unplugin-vue-setup-extend/vite";

export default defineConfig({
  plugins: [
    VueSetupExtend({
      /* options */
    }),
  ],
});
```

Example: [`examples/vite`](./examples/vite)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VueSetupExtend from "unplugin-vue-setup-extend/rollup";
export default {
  plugins: [
    VueSetupExtend({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require("unplugin-vue-setup-extend/webpack")({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    [
      "unplugin-vue-setup-extend/nuxt",
      {
        /* options */
      },
    ],
  ],
};
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>

<summary>Nuxt3</summary><br>

```ts
// nuxt.config.js
import VueSetupExtend from "unplugin-vue-setup-extend/vite"
export default {
   vite: {
        plugins: [VueSetupExtend({})],
  }
};
```

> This module works for both Nuxt 3

<br></details>

<details>


<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-vue-setup-extend/webpack")({
        /* options */
      }),
    ],
  },
};
```

Example: [`examples/vue-cli`](./examples/vue-cli)
<br></details>

## Template

### The most basic demonstration

```html
<template> </template>
<script setup lang="ts" name="App"></script>
```

### Some special cases

If you have two scripts in your project, we will not convert them; please set the name property yourself in a normal script

```html
<template> </template>
<script setup lang="ts" name="App">
  // This "name" here will not take effect.
</script>

<script lang="ts">
  export default {
    name: "App",
  };
</script>
```