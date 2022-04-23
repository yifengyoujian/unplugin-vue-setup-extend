import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { supportScriptName } from "./lib"

export default createUnplugin<Options>(options => ({
  name: 'unplugin-vue-setup-extend',
  enforce: 'pre',
  async transform(code, id) {
    if (!/\.vue$/.test(id)) {
      return null
    }
    return supportScriptName.call(this, code, id)
  },
}))
