/**
 * @file 线上环境配置
 */

var webpack = require("webpack");
var config = require('./wp.config')();
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.output.publicPath = '/asset/';
config.output.filename = config.output.filename.replace(/\.js$/, '.[hash].min.js');
config.output.path = require('path').resolve(__dirname, '../release') + '/asset';
config.entry.entry = './src/router';
config.loader.configEnvironment = 'production';
config.debug = false;
delete config.devtool;

config.plugins = [
    new HtmlWebpackPlugin({
        title: 'title',
        hash: false,
        inject: true,
        hash: true,
        // <div id="root">
        appMountId: 'main',
        // Or
        // appMountIds: ['root', 'app'],
        // Passing window data to browser runtime
        // Note: working with devServer should not be AP path
        filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].bundle.js'),
    new ExtractTextPlugin('[name].[hash].css')
];

module.exports = config;
