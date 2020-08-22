var mongoose = require("mongoose");

let Note = mongoose.model("Note", new mongoose.Schema({
    text:{type: String, required: true, minlength: 2, maxlength: 200},
},{timestamps:true}));