const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },
  optimization: {
    minimize: false
  },
  entry: './src/index.js',
  output: {
    filename: '[name].user.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname
    })
  ]
}

module.exports = webpackConfig