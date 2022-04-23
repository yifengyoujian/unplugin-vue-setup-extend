import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { supportScriptName } from "./lib"
import { createFilter } from '@rollup/pluginutils'

export default createUnplugin<Options>(options => {
  const filter = createFilter(
    [/\.vue$/, /\.vue\?vue/],
    [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  )


  return {
    name: 'unplugin-vue-setup-extend',
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    async transform(code, id) {
      if (id.endsWith('.vue') || id.includes('.vue?vue')) {
        return await supportScriptName.call(this, code, id)
      }
      return null
    },
  }
})
