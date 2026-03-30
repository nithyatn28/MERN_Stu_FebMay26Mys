// Middleware usage in ExpressJS
//Middleware runs during the request-response cycle
//Middleware can inspect or change the request before a route responds
//next() passes controle to the next step
const express = require("express");

const app =express();

//app.use registers middleware.
//this middleware runs for every incoming request.
app.use(function(req,res,next){
    console.log("Request recived",req.method,res.url);
    //next() is required when this middleware doesnot
    next();
});
app.get("/",function(req,res){
    //res.send() sends a response body and ends the request automatically
    res.send("Middleware executed before the route");
});
//listen() starts the server on a chosen port number
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});