var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.listen(8000);

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

