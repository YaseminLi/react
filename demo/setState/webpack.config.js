const path = require('path');
module.exports = {
    mode: 'development',//开发环境
    entry: "./src/main.js", //入口文件
    output: {
        path: path.join(__dirname, "/bundle/"), // 所有输出文件的目标路径，绝对路径
        filename: "bundle.js"//默认为main.js
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",//ES6转ES5
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"] //babel-loader需要的预设
                }
            }
        ]
    }
};