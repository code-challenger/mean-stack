var mongoose = require('mongoose');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

function Users(){
    this.index = function(req, res){
        User.find({})
        .populate('comments')
        .exec(function(err, users){
            res.render('index', {users:users});
        });
    }

    this.newMessage = function(req, res){
        var user = new User({name: req.body.name, message: req.body.message, created_at: new Date(), updated_at: new Date()});
        console.log(user);
        user.save(function(err){
            console.log(err);
            res.redirect('/');
        });
    }

    this.newComment = function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            var comment = new Comment(req.body);
            comment._user = user._id;
            comment.save(function(err){
                user.comments.push(comment);
                user.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.redirect('/');
                    }
                });
            });
        });
    }
}
var users = new Users();
module.exports = users;


