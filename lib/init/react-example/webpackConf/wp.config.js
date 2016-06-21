/**
 * @file 开发环境配置
 */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var wpConfig = function () {
    return {
        entry: {
            common: ['react'],
            entry: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                './src/router'
            ]
        },
        debug: true,
        devtool: 'cheap-module-inline-source-map',
        output: {
            path: '/',
            publicPath: '/asset/',
            filename: '[name].js',
            chunkFilename: 'entry.biz.[hash].js'
        },
        module: {
            loaders: [
                {   test: /\.rt/,
                    loader: 'react-templates'
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                },
                {
                    test: /\.less$/,
                    loader: "style!css!less?modules"
                },
                {
                    test: /\.jsx$/,
                    loader: ['react-hot', 'babel'],
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loaders: ['react-hot', 'babel'],
                    exclude: /node_modules/
                },
                {test: /\.png$/, loader: 'url?mimetype=image/png'},
                {test: /\.jpg/, loader: 'url?mimetype=image/jpg'},
                {test: /\.jpeg/, loader: 'url?mimetype=image/jpeg'}
            ]
        },
        loader: {
            configEnvironment: 'development'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['common', 'entry'], filename:'common.bundle.js'}),
            new ExtractTextPlugin('[name].css')
        ]
    };
};

module.exports = wpConfig;
