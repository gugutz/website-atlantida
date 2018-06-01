const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isCI = require('is-ci')


const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  resolve: {aliasFields: ['browser']},
  devtool: isProd ? false : 'cheap-module-source-map',
  plugins: [
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

