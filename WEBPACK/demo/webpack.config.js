// https://blog.csdn.net/sinat_17775997/article/details/80816363
const path=require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')//引入html-webpack-plugin 可以将生成的js自动引入html页面
const CleanWebpackPlugin=require('clean-webpack-plugin')//引入删除指定文件组件
const webpack=require('webpack')
module.exports={
    entry:{
        index:"./scripts/index.js"     //入口文件,若不配置webpack4将自动查找src目录下的index.js
    },
    output:{
        filename:'[name].bundle.[hash].js',    //输出文件名,[name]表示入口文件js名  [hash]会在后面生成随机hash值
        path:path.join(__dirname,'dist')       //输出文件路径
    },
    module:{  // 处理对应模块
        rules:[   
            {
                test:/\.css$/,
                use:['style-loader','css-loader']     //处理css
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        outputPath:'images/',      //输出到images文件夹
                        limit:999999               //是把小于999999B的文件打成Base64的格式，写入JS
                    }
                }]
            }
        ]
    },
    plugins:[ //对应的插件
        new HtmlWebpackPlugin({//配置
           filename:'index.html',//输出文件名
           template:'./src/index.html',   //以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin(),  //webpack 4 +的默认配置 默认删除output dist下的文件
        new webpack.HotModuleReplacementPlugin()  //热更新，热更新不是刷新
    ],
    devServer:{//配置此静态文件服务器，可以用来预览打包后项目
        inline:true,  //打包后加入一个websocket客户端
        hot:true,//热加载
        contentBase:path.resolve(__dirname,'dist'),//开发服务运行时的文件根目录
        host:'localhost',//主机地址
        port:9090,//端口号
        compress:true//开发服务器是否启动gzip等压缩
    }
}