const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css',
    }),
  ],
  output: {
    filename: '[name].[contenthash].min.js',
  }
}
module.exports = merge(commonConfig, prodConfig)
