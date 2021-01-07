const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle_[hash].min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv({
      path: path.join(__dirname, 'src/.env'),
    }),
    new webpack.EnvironmentPlugin(['BASE_URL']),
  ],
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
};
