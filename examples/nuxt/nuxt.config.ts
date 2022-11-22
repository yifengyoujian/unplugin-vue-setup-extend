import { defineNuxtConfig } from "nuxt/config";
import VueSetupExtend from "unplugin-vue-setup-extend/vite"

export default defineNuxtConfig({
    vite: {
        plugins: [VueSetupExtend({})],
    }
})