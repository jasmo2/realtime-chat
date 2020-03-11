// shared config (dev and prod)
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        logLevel: 'info'
      })
    ]
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html.ejs' })],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  performance: {
    hints: false
  }
}
