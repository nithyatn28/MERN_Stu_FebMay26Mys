//Basics of ExpressJS -setup
//npm init -y
//npm install express

//impot module of express
const express = require("express");
//calling express() create the main applicaton object
//this object is used to register routes and middleware
const app =express();

//app.get() it is a function handeles GET request for a specific path
app.get("/",function(req,res){
    //res.send() sends a response body and ends the request automatically
    res.send("Hello from express server");
});
//listen() starts the server on a chosen port number
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});