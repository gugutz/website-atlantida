const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve('public/client'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    // changed serve folder from 'dist' to 'src' to work with webpack and simple static non-js served websites
    contentBase: path.join(__dirname, 'src'),
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: {'^/.netlify/functions': ''},
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
