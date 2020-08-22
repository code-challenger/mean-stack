var mongoose = require("mongoose");
var NoteController = require("../controllers/NoteController.js");

module.exports = function(app){
    app.post("/new", NoteController.create)
    app.get("/notes", NoteController.all);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}