let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.js', //指定入口文件
	output: { //指定输出的位置
		path: path.resolve('build'),
		filename: 'bundle.js'//打包后的文件名
	},
	module: {
		//转译规则 什么样的文件，用什么样的预设来进行转译
		rules: [
			//如果加载的模块的文件名是以.js结尾的话，用babel来加载
			//还要为babel配置三个预设，分别编译es6 es7 react
			{
				test: /\.js$/,
			 	loader: 'babel-loader',
			 	exclude: /node_modules/,//不扫描node_modules里面的文件
			 	query: {
				presets: ["es2015", "stage-0", "react"]
			}},
			//如果要加载的模块是以.css结尾的话，使用css style loader
			{test: /\.css$/, loaders:["style-loader", "css-loader"]},
			{
				test: /\.(jpg|png|gif|eot|svg|woff|woff2|ttf|)$/,
				loader: 'url-loader'
			}
		]
	},
	//插件
	plugins:[
		//用来自动产出html文件，并且向里面插入打包后的js文件
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}