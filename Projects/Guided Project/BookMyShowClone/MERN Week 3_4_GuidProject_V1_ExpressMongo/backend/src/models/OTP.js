const { attempt } = require("lodash");
const mongoose = require("mongoose");
 const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true
    },
    otp:{
        type:String,
        requried:true,
        select:false,
    },
    expiresAt:{
        type:Date,
        required:true
    },
    attempts:{
        type:Number,
        value:0
    },
 },{timestamps:true});

 //TTL index
 otpSchema.index({expiresAt:1},{expireAfterSeconds:0});

 //exports

 module.exports = mongoose.model("OTP",otpSchema);