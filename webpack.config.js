const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /\/node_modules\//,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'public'),
            'node_modules'
        ],
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
        new CleanWebpackPlugin()
    ]
};

module.exports = config;