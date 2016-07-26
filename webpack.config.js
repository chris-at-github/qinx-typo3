var webpack = require('webpack');

// webpack.config.js
module.exports = {
	entry:   './fileadmin/Resources/Private/Js/qinx.js',
	output:  {
		filename: 'qinx.package.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$:      'jquery',
			jQuery: 'jquery'
		})
	]
};