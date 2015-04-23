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
	context: __dirname + '/public/app',
	entry:  './bootstrap',
    resolve: {
		root: __dirname + '/public/app',
		extensions: ['', '.js', '.jsx']
    },
    output: {
    	path: __dirname + '/public/build',
    	publicPath: __dirname + '/public',
    	filename: 'app.js'
    },
	module: {
		loaders: [
			{
				test: /\.jsx$|\.js?$/,
				include: __dirname + '/public/app',
				loader: 'babel-loader?optional=runtime'
			}
		]
	},
	plugins: plugins,
	target: 'web'
};