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
      // fix: Narrow down the match
      if (id.endsWith('.vue') || id.includes('.vue?vue&type=script')) {
        return transform(code, id)
      }
      return null
    },
  }
})
