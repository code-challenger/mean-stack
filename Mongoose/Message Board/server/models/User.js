var mongoose = require('mongoose');
//only use for associations (relationships between tables)
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    message : String,
    //only use for associations (relationships between tables)
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],
    // can use ,{timestamps: true}); for created/updated_at
    created_at: Date,
    updated_at: Date
});

mongoose.model('User', userSchema);