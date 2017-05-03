var path = require('path')
var webpack = require('webpack')

if (process.env.NODE_ENV === 'example') {
  module.exports = require('./webpack.example.js')
} else {
  module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    performance: {
      hints: false
    },
    devtool: '#cheap-eval-source-map'
  }
}
