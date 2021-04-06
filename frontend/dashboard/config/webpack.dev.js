/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const packageJson = require('../package.json')

module.exports = () => {

    return merge(common(), {
        mode: 'development',
        output: {
            publicPath: 'http://localhost:8081/'
        },
        devtool: 'inline-source-map',
        devServer: {
            port: 8081,
            historyApiFallback: true,
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'dashboard',
                filename: 'remoteEntry.js',
                exposes: {
                    './DashboardApp': './src/bootstrap'
                },
                shared: packageJson.dependencies,
            }),
        ]
    })
}
