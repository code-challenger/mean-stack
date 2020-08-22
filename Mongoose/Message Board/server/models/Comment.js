var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref:'User'},
    comment: {type: String, required: true},
    commenterName : String, 
    created_at: Date,
    updated_at: Date
});

mongoose.model('Comment', commentSchema);