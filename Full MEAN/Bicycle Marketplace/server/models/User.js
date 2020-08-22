var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [45],
        trim: true,
        required: [true, "First Name is required"]
    },
    last_name:{
        type: String,
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [45],
        trim: true,
        required: [true, "Last Name is required"]
    },
    email:{
        type: String,
        minlength: [6, "Email must be at least 6 characters long"],
        trim:true,
        required: [true, "Email is required"],
        validate:{
            validator: (val) => {
                return /^([A-Za-z0-9._\-]+)@([a-zA-Z0-9._\-]+)\.([a-zA-Z]+)$/.test(val);
            },
            message: "Email format is not valid"
        },
        unique: true
    },
    password:{
        type:String,
        minlength: [16, "Password must be atleast 16 characters long"],
        required: [true, "Password is required"],
    },
    bicycles: [
        {
            type: Schema.Types.ObjectId, ref: "Bicycle"
        }
    ]
}, {timestamps: true});


var User = mongoose.model('User', UserSchema);