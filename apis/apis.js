/*
	author: Mohan Kumar Kuppuraj
	description: APIs required for the application
*/
const fs = require("fs");
const path = require("path");
class APIS {
	constructor(){

	}
	initializeServer = function(app,process,services){
		app.get("/api/selections",function(req,res){
			var JSON_DATA = JSON.parse(fs.readFileSync( path.resolve('./server/data.json'),'utf-8'));
			res.json(JSON_DATA);
		});
	}
}

module.exports = {
	APIS
}