const path = require('path');
module.exports = {
    mode: 'development',//开发环境
    // context: path.join(__dirname),
    entry: "./src/js/root.js",  //入口文件
    output: {
        // path: path.join(__dirname, "/dist/"),    // 所有输出文件的目标路径，绝对路径！
        // filename: "bundle.js"
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    // devServer:{
    //     contentBase:'./src'
    // },//默认路径为outPut path
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",//babel-loader将其他文件解析为js文件
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"],  //babel-loader需要的预设
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }
                ],
                //loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]'
            },
        ]
    },
};