var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/public/dist")));
app.use(session({secret: "kristakrista"}));

require("./server/config/mongoose.js");

var routes_setter = require("./server/config/routes.js")(app);

app.listen(8000, () => {
    console.log("Listening on Port 8000");
})