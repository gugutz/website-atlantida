const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    // auto generate an html that imports the main js entrypoint
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
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
      // parse js files with babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      // css loader to build on production
      {
        test: /\.css$/,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          {
          loader: 'css-loader',
            options: {
              localIdentName: '[local]--[hash:base64]'
            }
          }
        ]
      }
    ]
  },
  // compiling output config
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public/static'),
    publicPath: '/static/'
  }
}

