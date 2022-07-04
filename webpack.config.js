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

	/*
	, {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                  use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" ,
                    options: { modules: true }
                  }]
            }
  */