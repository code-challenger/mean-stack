var mongoose = require("mongoose");
var User = mongoose.model("User");
var Bicycle = mongoose.model("Bicycle");
var bcrypt = require("bcrypt");

module.exports = {
    register: (req, res) => {
        //check if email already in database
        User.findOne({email: req.body.email}, (err, emailCheck) => {
            if( emailCheck == null ){
                console.log("At register in UserController");
                var user = new User(req.body);
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
                user.save((err, savedUser) => {
                    if(err){
                        console.log("Could not save user");
                        var errors = [];
                        for(var i in err){
                            errors.push(err[i].message);
                        }
                        return res.status(400).send(errors);
                    }
                    else{
                        console.log("User Registered Successfully", user);
                        req.session.user_id = savedUser._id;
                        return res.json(savedUser);
                    }
                })

            }
            else{
                console.log("Email already belongs to a registered user");
                let errors = "Email already registered";
                return res.status(400).send(errors);
            }
        })
    },

    login: (req, res) => {
        User.findOne({email: req.body.email}, (err, loginUser) => {
            if(loginUser == null){
                console.log("Could not login");
                let errors = "Email is not registered";
                return res.status(400).send(errors);
            }
            else{
                if(bcrypt.compareSync(req.body.password, loginUser.password)){
                    req.session.user_id = loginUser._id;
                    return res.json(loginUser);
                }
                else{
                    let errors = "Invalid Password Entered";
                    return res.status(400).send(errors);
                }
            }
        })
    },

    getSession: (req, res) => {
        if(req.session.user_id){
            User.findOne({_id: req.session.user_id}, (err, user) => {
                if(err){
                    return res.status(400).send(err);
                }
                else{
                    return res.json(user);
                }
            })
        }
        else{
            return res.status(400).send(err);
        }
    },

    find: (req, res) => {
        User.findOne({_id: req.session.user_id}, (err, user) => {
            if(err){
                var errors = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                return res.json(user);
            }
        })
    },

    findCreator: (req, res) => {
        console.log("in findCreator method of UserController")
        console.log(req.body.creatorId);
        User.findOne({_id: req.body.creatorId}, (err, user) => {
            if(err){
                var erorrs = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                return res.json(user);
            }
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.json(true);
    }
}