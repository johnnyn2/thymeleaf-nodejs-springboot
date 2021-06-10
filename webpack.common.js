const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs');
const baseUrl = './src/main/resources/webapp/src';
const staticResourcesUrl = './src/main/resources/static';

module.exports = {
  entry: {
    index: baseUrl + '/pages/index.js',
    posts: baseUrl + '/pages/posts.js'
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.jpg|png|gif|svg$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          esModule: false,
        }
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: baseUrl + '/html/index.html',
      inject: true,
      chunks: ['index'],
      filename: '../templates/index.html',
      publicPath: '/',
    }),
    new HtmlWebpackPlugin({
      title: 'posts',
      template: baseUrl + '/html/posts.html',
      inject: true,
      chunks: ['posts'],
      filename: '../templates/posts.html',
      publicPath: '/',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, staticResourcesUrl)
  }
}
