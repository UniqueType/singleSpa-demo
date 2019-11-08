// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const path = require('path')
// const defaultSettings = require('./src/settings.js')
module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', true)
        process.env.NODE_ENV !== 'alone' ? config.externals(['vue', 'vue-router']) : ''
    },
    assetsDir: "./static",
    productionSourceMap: false, // .map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
    filenameHashing: true,
    // 修改打包后js文件名
    configureWebpack: { // webpack 配置
        // entry: {
        //     store: './src/store/index1.js'
        // },
        output: { // 输出重构  打包编译后的 文件名称
            filename: `[name].js`,
            // chunkFilename: `[name].[chunkhash:8].js`
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        sourceMap: false,
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        },
        performance: {
            hints: false
        }
    }

}