/**
 * Created by zhongpeipei on 2017/2/23.
 */
var webpack = require('webpack');
// 将样式抽取成独立的文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
// node js
var NODE_ENV = process.env.NODE_ENV;
// package 已配置,检测是dev环境还是production环境
var ISPRODCUTION = NODE_ENV === 'production';
var ISDEV = NODE_ENV === 'development';
var definePlugin = new webpack.DefinePlugin({
    // PRODUCTION: JSON.stringify(ISPRODCUTION),
    ISDEV: JSON.stringify(ISDEV)
});

module.exports = {
    context: __dirname,
    entry: {
        // hot: 'webpack/hot/dev-server',
        // client: 'webpack-dev-server/client?http://localhost:3333',
        main: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    // resolve 指定可以被 import 的文件后缀
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    // hotload
    devServer: {
        // 对于单页面程序，浏览器的brower histroy可以设置成html5 history api或者hash，而设置为html5 api的，如果刷新浏览器
        // 会出现404 not found，原因是它通过这个路径（比如： /activities/2/ques/2）来访问后台，所以会出现404，
        // 而把historyApiFallback设置为true那么所有的路径都执行index.html
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, './src'),
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use:
                    [{
                        loader: 'babel-loader?sourceMap',
                        options: {
                            presets: ['es2015','react']
                        }
                    }]
            },
            // {
            //     test: /\.(png|jpg|jpeg)$/,
            //     loader: 'url-loader?limit=85000' // 内联的base64的图片地址，图片要小于83kb，直接的url的地址则不解析
            // },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {   // sourceMap用来关联source文件和压缩后的文件的,方便调试,css-loader用于解析,style-loader用于将解析后的样式嵌入js代码
                // ExtractTextPlugin.extract可以有三个参数。
                // 第一个参数是可选参数，传入一个loader，当css样式没有被抽取的时候可以使用该loader。
                // 第二个参数则是用于编译解析的css文件loader，很明显这个是必须传入的，就像上述例子的css-loader。
                // 第三个参数是一些额外的备选项，貌似目前只有传入publicPath，用于当前loader的路径。
                //test: /\.css$/,
                //loader: ExtractTextPlugin.extract('css-loader?sourceMap')
            },
            {
                test: /\.(sass|scss|css)$/,
                // 排除该路径的文件
                // exclude: [path.resolve(__dirname, "./src/common/styles"), /node_modules/],
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        definePlugin,
        // new ExtractTextPlugin([id: string], filename: string, [options])
        new ExtractTextPlugin({
            allChunks: true, // 是否将所有额外的chunk都压缩成一个文件
            disable: false, // 禁止使用插件
            filename: '[name].css'
        }),
        //用webpack的内置插件UglifyJsPlugin来压缩css和js代码
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        // 用CommonsChunkPlugin抽取公共css和js代码,CommonsChunkPlugin是在有多个entry时使用的，即在有多个入口文件时，这些入口文件可能会有一些共同的代码，
        // 便可将这些共同的代码抽取出成独立的文件。抽取出来的css文件的命名将会是参数中name的值，而js文件名则会是filename的值。
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: "commons",
        //    filename: "commons.js",
        //    chunks: ['pay', 'result'] // 只需要取pay.js和result.js中chunk的共同代码,若取所有文件共同的代码,不写此参数
        //}),
        new CopyWebpackPlugin(
            [
                {
                    from: './**/*.html',
                    to: '[name].html'
                },
                {
                    from:'./**/*.css',
                    to: '[name].css'
                },
                // {
                //     from:'./**/*.jpeg',
                //     to: '[name].jpeg'
                // }
            ]
        ),
        new webpack.HotModuleReplacementPlugin(), // 热加载
        new OpenBrowserPlugin({ url: 'http://localhost:3333', browser: 'google chrome'})
    ]
};





