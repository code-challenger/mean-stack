var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

function Mongooses(){
    this.index = function(req, res){
        Mongoose.find({}, function(err, mongooses){
            console.log(err);
            res.render('index', {mongooses:mongooses});
        });
    }

    this.getMongoose = function(req, res){
        let mongoose = Mongoose.find({_id: req.params.id}, function(err, mongoose){
            res.render('mongoose', {mongoose:mongoose[0]});
        });
    }

    this.new = function(req, res){
        res.render('new');
    }

    this.create = function(req, res){
        var mongoose = new Mongoose({name: req.body.name, gender: req.body.gender, created_at: new Date(), updated_at: new Date()});
        console.log(mongoose);
        mongoose.save(function(err){
            console.log(err);
            res.redirect('/');
        });
    }

    this.edit = function(req, res){
        let mongoose = Mongoose.find({_id: req.params.id}, function(err, mongoose){
            res.render('edit', {mongoose:mongoose[0]});
        });
    }

    this.editMongoose = function(req, res){
        if(req.body.name){
            Mongoose.update({_id: req.params.id}, {$set: {name: req.body.name, updated_at: new Date()}}, function(err, result){
                if(err){
                    console.log(err);
                }
            });
        }
        if(req.body.gender){
            Mongoose.update({_id: req.params.id}, {$set:{gender: req.body.name, updated_at: new Date()}}, function(err,result){
                if(err){
                    console.log(err);
                }
            });
        }
        res.redirect('/');
    }
          
    this.destroy = function(req, res){
        Mongoose.remove({_id:req.params.id}, function(err){
            res.redirect('/');
        });
    }
}

var mongooses = new Mongooses();
module.exports = mongooses;