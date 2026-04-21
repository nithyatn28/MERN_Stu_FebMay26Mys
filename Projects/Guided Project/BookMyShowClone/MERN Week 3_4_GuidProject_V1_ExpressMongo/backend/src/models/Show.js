const mongoose = require("mongoose");
const Movie = require("./Movie");

const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    },
},{_id:false});

const showSchema = new mongoose.Schema({
    MovieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required:true,
        index:true,
    },
    date:{
        type:Date,
        required:true,
        index:true
    },
    time:{
        type:String,
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    availableSeates:{
        type:Number,
        requried:true,
    },
    seates:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true
    },
},
{
    timestamps:true
});

//create compound index:
showSchema.index({MovieId:1,date:1});
//add validation
showSchema.pre("save",function(next){
    if(this.availableSeates){
        return next(new Error("Available seates cannot exceed total seates"));
    }
    next();
});

module.exports = mongoose.model("Show",showSchema);

