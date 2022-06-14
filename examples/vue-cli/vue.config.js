const VueSetupExtend = require("unplugin-vue-setup-extend/webpack")

module.exports = {
    configureWebpack: {
        plugins: [
            VueSetupExtend()
        ]
    }
}