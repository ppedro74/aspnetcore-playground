const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about/about.js',
        home: './src/home/home.ts'
    },

    output: {
        filename: '[name].bundle.js',

        path: path.resolve(__dirname, 'wwwroot')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/about/about.html',
            filename: 'about/index.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/home/home.html',
            filename: 'home/index.html',
            chunks: ['home']
        })
    ]
}