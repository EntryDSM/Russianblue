const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.min.js',
    publicPath: '/',
  },
  mode: 'production',
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
    new UglifyJSPlugin(),
  ],
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
  mode: 'production',
};
