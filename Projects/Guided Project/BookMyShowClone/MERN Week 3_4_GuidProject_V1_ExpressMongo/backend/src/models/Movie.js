const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:true,
        required:[true,"Movie title is required"],
        trim:true,
        index:true
    },
    genre:{
        type:String,
        required:[true,"Genre is requried"],
        enum:[
            "Action","Drama","Comedy","Horrer","Sci-fi","Romantic","Thiller"
        ],
        index:true
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"Rating must be atleast one"],
        max:[5,"rating cannot exceed 5"],
        index:true
    },
    duration:{
        type:true,
        required:[true,"Duration is requried"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is requried"],
        index:true
    },
    poster:{
        type:String,
        default:"",

    },
    language:{
        type:String,
        index:true
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true,
}
);

//compound index 
movieSchema.index({gener:1});

//text index
movieSchema.index({title:"text"});

//virtual field
movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate<=new Date();
});

module.exports = mongoose.model("Movie",movieSchema);