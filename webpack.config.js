const webpack = require('webpack');
const path = require('path');

module.exports = {
	// we want to use index.js file as entry point to bundle all of its imported fifle
	entry: [
		'react-hot-loader/patch', // this will help to apply the changes in the browser without reloading the browser
		'./src/index.js'
	],
	//here we are adding dome loaders which will be responsible to bundle our source files
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	// here we are telling our webpack to output our bundle.js
	output: {
		path: path.resolve(__dirname + '/dist'),
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	// configuration will be providing the options for our dev server
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
