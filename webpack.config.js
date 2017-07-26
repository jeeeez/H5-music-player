const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist',
		stats: {
			errors: true,
			warnings: true,
			modules: false,
			performance: false,
			// assets: false,
			// chunks: false,
			// chunkModules: false,
			// chunkOrigins:false,
			// reasons: false,
			// source: false,
			// usedExports: false,
			// providedExports: false,
			// moduleTrace:false,
			// timings:false
		}
	},
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './index.html',
			filename: 'index.html'
		})
	],
	module: {
		rules: [{
		// 	test: /\.js$/,
		// 	loader: 'eslint-loader',
		// 	enforce: 'pre',
		// 	include: [path.resolve('src')],
		// 	options: {
		// 		formatter: require('eslint-friendly-formatter')
		// 	}
		// }, {
			test: /\.js$/,
			use: ['babel-loader'],
			include: [path.resolve('./src')]
		}, {
			test: /\.html$/,
			use: ['vue-html-loader'],
			include: [path.resolve('./src')]
		}, {
			test: /\.(s)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}, {
			test: /\.(m4a)$/,
			use: ['file-loader']
		}]
	}
};
