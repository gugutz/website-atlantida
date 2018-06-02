const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isCI = require('is-ci')


const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['babel-polyfill']
  },
  resolve: {aliasFields: ['browser']},
  devtool: isProd ? false : 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(['public/static', 'public/index.html']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'public/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public/static'),
    publicPath: '/static/'
  }
}

