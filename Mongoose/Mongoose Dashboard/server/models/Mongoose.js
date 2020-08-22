var mongoose = require('mongoose');

var mongooseSchema = new mongoose.Schema({
    name: String,
    gender: String,
    created_at: Date,
    updated_at: Date,
});

mongoose.model('Mongoose', mongooseSchema);