const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
  }
}

module.exports = merge(commonConfig, devConfig)
