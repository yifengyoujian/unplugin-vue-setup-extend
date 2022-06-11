import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import VueSetupExtend from "unplugin-vue-setup-extend/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(), vue(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
