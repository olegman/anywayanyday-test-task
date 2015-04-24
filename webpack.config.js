var webpack = require('webpack');
var argv    = require('yargs').argv;
var prod    = argv.p;

var plugins = [];
if (prod) {
	plugins.push(new webpack.optimize.UglifyJsPlugin());
	plugins.push(new webpack.optimize.DedupePlugin());
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}));
	plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = {
	context: __dirname + '/app',
	entry:  './bootstrap',
    resolve: {
		root: __dirname + '/app',
		extensions: ['', '.js', '.jsx']
    },
    output: {
		libraryTarget: 'var',
		library: 'App',
    	path: __dirname + '/build',
    	publicPath: __dirname,
    	filename: prod ? 'app.min.js' : 'app.js'
    },
	externals: {
		jquery: 'jQuery',
		react: 'React'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$|\.js?$/,
				include: __dirname + '/app',
				loader: 'babel-loader?optional=runtime'
			}
		]
	},
	plugins: plugins,
	target: 'web'
};