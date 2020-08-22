var mongoose = require('mongoose');
var User = mongoose.model('User');
var moment = require('moment');

function Users(){
    this.index = function(req, res){
            res.render('index');
    }
    this.create = function(req, res){
        var user = new User({name: req.body.name, quote: req.body.quote, posted_at: new Date()});
        console.log(user);
        user.save(function(err){
            console.log(err);
            console.log(user);
            res.redirect('/quotes');
        });
    }
    this.main = function(req, res){
        console.log('here');
        User.find({}, function(err, users){
            console.log(err);
            res.render('main', {users:users, moment:moment});
        });
    }
}

var users = new Users();
module.exports = users;

