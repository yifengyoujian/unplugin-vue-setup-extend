import { createUnplugin } from 'unplugin'
import type { Options } from '../types'
import { createFilter } from '@rollup/pluginutils'
import transform from "./transform"

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
    transform(code, id) {
      if (id.endsWith('.vue') || id.includes('.vue?vue')) {
        return transform(code, id)
      }
      return null
    },
  }
})
