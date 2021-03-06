const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      helpers: path.resolve(__dirname, 'src/helpers/index.ts'),
      "neo-context": path.resolve(__dirname, 'src/modules/index.ts')
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // clean up dist folder
    new HtmlWebpackPlugin({
      title: 'NEO AUDIO WEB' // html template plugin
    }),
    new webpack.NamedModulesPlugin(), // TODO learn
    new webpack.HotModuleReplacementPlugin() // HMR
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'neo-audio-web.js',
    library: 'neo-audio-web',
    libraryTarget: "umd"
  }
};
