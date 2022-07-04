var path  = require("path");


module.exports = [{
	entry:[
		"./scripts/components/init.component.js",
		"./scripts/components/root/root.component.js"
	],
	output:{
		path:path.resolve("./build"),
		filename:"build.js"
	},
	resolve:{
		extensions:['.js', '.jsx'],
		modules: ["node_modules"]
	},
	module:{
		rules:[
			{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
		]
		}
	}];