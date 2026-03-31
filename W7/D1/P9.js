//Middleware chaining and error handling middleware
const express = require("express");

const app =express();
//First middleware
//global middleware
app.use(function(req,res,next){
    console.log("Request",req.method,res.url);
    next();
});
app.use(function(req,res,next){
    req.requestSource = "Middleware-chain-example";
    next();
});
app.get("/ok",function(req,res){
    res.json({
        success:true,
        source:req.requestSource
    });
});
app.get("/fail",function(req,res,next){
    next(new Error("Route failure"));
});
//global error handling
app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    });
});
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});