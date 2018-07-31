require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  plugins: [
    // this exposes those variables to javascript in global scobe
    // new webpack.DefinePlugin({
    //   LAMBDA_ENDPOINT: JSON.stringify('http://localhost:9000'),
    // }),
  ],
  // new webpack.IgnorePlugin(/^encoding$/, /node-fetch/),
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: 'babel-loader'
    //   },
    // ]
  },

};
