const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "name is required"]
    },
    email:{
        type:String,
        required:[true , "email is required"]
    },
    password:{
        type:String,
        required:[true , "password is required"]
    },
    isAdmin:{
        type:Boolean,
        required:[true , "isAdmin is required"]
    }
})

const User = mongoose.model("User" , authSchema);
module.exports = User;