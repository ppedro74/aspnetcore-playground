const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',

    //https://webpack.js.org/configuration/devtool/
    //devtool: 'inline-source-map',
    //devtool: 'eval-source-map',

    //https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            //filename: "[file].map",
            moduleFilenameTemplate: '[absolute-resource-path]'
        })
    ],

    devServer: {
        contentBase: './wwwroot'
    }
});