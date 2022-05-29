const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    popup: './src/popup.jsx',
    options: './src/options.jsx',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename: 'options.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "public" },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
};