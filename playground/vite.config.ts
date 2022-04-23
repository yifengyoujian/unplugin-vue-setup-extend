import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import VueSetupExtend from '../src/vite'
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [
    Inspect(),
    VueSetupExtend(),
    vue()
  ],
})
