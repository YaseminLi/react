const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env',"@babel/preset-react"]
              }
            }
          }
        ]
      },
    plugins: [new HtmlWebpackPlugin({
        title:'IMOOC',
        filename:'main.html',
        template:'template.html'

    })]
}