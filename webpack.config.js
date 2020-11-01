const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    publicPath: path.resolve(__dirname, 'public'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  plugins: [
    new CopyPlugin({
        patterns: [
            { 
                from: path.resolve(__dirname, 'src', 'index.html') ,
            },
            { 
                from: path.resolve(__dirname, 'public') ,
            },
        ],
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
    }),
  ]
};

module.exports = config;