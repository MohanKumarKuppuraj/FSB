var express = require("express");
var APIS = require("./apis");
var app = new express();
var path = require("path");
app.use(express.static(path.resolve("./assets")));
app.use(express.static(path.resolve("./build")));
var apis = new APIS.APIS();
apis.initializeServer(app,process,{});
app.listen(80,()=>{
	console.log("App started listening to the port 80");
});