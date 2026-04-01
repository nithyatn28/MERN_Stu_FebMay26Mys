//Handling asynchronous errors with callbacks
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newfile.txt");
    fs.readFile(filePath,"utf8",function(error,data){
        if(error){
            //Forwording the async error
            return next(error);
        }
        res.send(data);
    });
});
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:"file/folder doesnot exist",
        //Originalmessage:error.message
    });
});
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});