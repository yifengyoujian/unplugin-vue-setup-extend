import { parse, compileScript } from './compiler'
import MagicString from 'magic-string'
import { basename } from "path"

// fix: Remove the vue-demi  
const generateScript = (lang: string | true, name: string | true): string =>
  `<script${lang ? ` lang="${lang}"` : ''
  }> export default {name: '${name}'}</script>`

export default function transform(code: string, id: string) {
  const { descriptor } = parse(code)

  // fix: No scriptSetup or have a script to exit directly
  if (!descriptor.scriptSetup || descriptor.script) {
    return null
  }

  const magic = new MagicString(code)

  const {
    attrs: { name, lang },
  } = compileScript(descriptor)

  name && magic.appendLeft(0, generateScript(lang, name))

  const map = magic.generateMap({ hires: true })
  const filename = basename(id)

  map.file = filename
  map.sources = [filename]

  return {
    map,
    code: magic.toString(),
  }
}