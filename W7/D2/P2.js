//Third-party middleware
//this available @ npm repository
const express = require("express");
//middleware to log all the request 
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.get("/",function(req,res){
    res.json({
        message:"Third party middleware executed before this response"
    });
});
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});