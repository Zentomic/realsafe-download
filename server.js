var express = require("express");
var app = new express();

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	var file = __dirname + "/realsafe.apk";
	res.download(file);
});

app.listen(port);