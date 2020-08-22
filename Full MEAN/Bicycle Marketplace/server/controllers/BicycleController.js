var mongoose = require("mongoose");
var Bicycle = mongoose.model("Bicycle");
var User = mongoose.model("User");

module.exports = {
    create: (req, res ) => {
        if(req.session.user_id){
            User.findOne({_id: req.session.user_id}, (err, user) => {
                if(err){
                    console.log("Could not find User");
                    var errors = [];
                    for(var i in err){
                        errors.push(err[i].message);
                    }
                    return res.status(400).send(errors);
                }
            else {
                var bicycle = new Bicycle(req.body);
                bicycle._user = user._id;
                console.log(user)

                bicycle.save( (err, savedBike) => {
                    if(err){
                        var errors = [];
                        console.log("Bike was not saved");
                        for(var i in err){
                            errors.push(err[i].message);
                        }
                        return res.status(400).send(errors);
                    }
                    else{
                        user.bicycles.push(bicycle);
                        console.log("Bike saved.");
                        user.save((err) => {
                            if(err){
                                console.log("could not save User with Bike", err);
                                var errors = [];
                                for(var i in err){
                                    errors.push(err[i].message);
                                }
                                return res.status(400).send(errors);
                            }
                            else{
                                console.log("Saved User with Bike");
                                return res.json(true);
                            }
                        })
                    }
                })
            }
        })
    }
    else {
        console.log("No session");
        let errors = ["No session"];
        return res.status(400).send(errors);
    }
    },

    all: (req, res) => {
        Bicycle.find({}, (err, bicycles) => {
            if(err){
                console.log("Could not get all the bikes");
                var errors = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                console.log("Retrieving bikes...");
                return res.json(bicycles);
            }
        })
    },

    userBikes: (req, res) =>{
        if(req.session.user_id){
            Bicycle.find({_user: req.session.user_id}).sort('createdAt')
            .exec( (err, bicycles) => {
                if(err){
                    console.log("Could not get user's listings");
                    var errors = [];
                    for(var i in err){
                        errors.push(err[i].message);
                    }
                    return res.status(400).send(errors);
                }
                else{
                    console.log("Got User's bikes", bicycles);
                    return res.json(bicycles);
                }
            })
        }
    },
    update: (req, res) => {
        Bicycle.findByIdAndUpdate({_id: req.params.bike_id}, { $set: req.body}, {new:true}, (err, bicycle) =>{
            if(err){
                console.log("Could not find bike");
                var errors = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                console.log("Found Bike");
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(bicycle);
                        return res.json(bicycle);
                    }
                }
            })

    },

    delete: (req, res) => {
        Bicycle.remove({_id: req.params.bike_id}, (err, bicycle) => {
            if(err){
                console.log("Could not delete Bike");
                var errors = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                res.json(true);
            }
        })
    },

    search: (req, res) => {
        console.log("Inside search in Bicycle Controller");
        Bicycle.find({$text: {$search:"${req.body.content}"}}, (err, bicycles) => {
            if(err){
                console.log("Could not find bikes in search");
                var errors = [];
                for(var i in err){
                    errors.push(err[i].message);
                }
                return res.status(400).send(errors);
            }
            else{
                res.json(bicycles);
            }
        }).sort({createdAt:-1});

    }
}
