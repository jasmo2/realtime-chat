// development config
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./common')

const PORT = process.env.PORT || '3000'
console.log('PORT', PORT)
module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    './index.tsx' // <-
  ],
  devServer: {
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})
