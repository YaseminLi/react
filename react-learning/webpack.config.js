const path = require('path');
module.exports = {
    mode: 'development',//开发环境
    context: path.resolve('./src'),
    entry: "./js/index.js",  //入口文件
    output: {
        path: path.join(__dirname, "/dist/"),    // 所有输出文件的目标路径，绝对路径！
        filename: "bundle.js"
    },
    devServer:{
        contentBase:'./dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,                
                exclude: /node_modules/,
                loader: "babel-loader",//babel-loader将其他文件解析为js文件
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]  //babel-loader需要的预设
                }
            }
        ]
    }
};