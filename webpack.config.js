var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		main: './src/js/main.js',
		apiService: './src/js/apiService.js',
	},
	output: {
		path: './assets/js',
		filename: '[name].js'
	},
	plugins: [
		new webpack.ProvidePlugin({ riot: 'riot' }),
		commonsPlugin
		// new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		preLoaders: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: 'riotjs-loader',
				query: {
					type: 'babel'
				}
			}
		],
		loader: [
			{
				test: /\.js$|\.tag$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.tag']
	}
};
