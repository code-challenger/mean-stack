var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    quote: String,
    posted_at: Date
});

mongoose.model('User', userSchema);