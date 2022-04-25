const VueSetupExtend = require("unplugin-vue-setup-extend/webpack").default

module.exports = {
    configureWebpack: {
        plugins: [
            VueSetupExtend()
        ]
    }
}