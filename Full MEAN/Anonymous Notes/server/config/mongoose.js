var mongoose = require("mongoose");
let fs = require("fs");
var path = require("path");
var modelPath = path.join(__dirname, "./../models");

mongoose.connect("mongodb://localhost/anonymous_notes");
mongoose.promise = global.Promise;

fs.readdirSync(modelPath).forEach(function(file){
    if(file.indexOf(".js") >= 0) {
        require(modelPath + "/" + file);
    }
});