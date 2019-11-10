const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') ,
        // publicPath: '/outputdist/'
    },
    // devServer:{
    //     contentBase

    // },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    // devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        // new webpack.HotModuleReplacementPlugin()
    ]
}