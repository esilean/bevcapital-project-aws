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
      publicPath: 'http://localhost:8080/',
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          dashboard: 'dashboard@http://localhost:8081/remoteEntry.js',
        },
        shared: packageJson.dependencies,
      }),
    ],
  })
}
