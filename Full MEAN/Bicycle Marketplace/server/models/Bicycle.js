var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create the schema

var BicycleSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Image of bicycle is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description:{
        type: String,
        minlength: [2],
        maxlength: [250],
        required: [true, "Description of bicycle is required"]
    },
    price: {
        type: Number,
        min: [1, "Bicycle must be priced at least $1.00"],
        required: [true, "Price is required"]
    },
    location:{
        type: String,
        required: [true, "Location of bicycle is required"]
    },
    _user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, {timestamps: true});

var Bicycle = mongoose.model('Bicycle', BicycleSchema);