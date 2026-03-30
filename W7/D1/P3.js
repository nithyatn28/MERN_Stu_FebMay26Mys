//Handling diffrent HTTP methods in express
const express = require("express");

const app =express();
app.get("/users",function(req,res){
    //To read
    res.send("Returning all users");
});
//To create
app.post("/users",function(req,res){
    //res.status set the HTTP status code before sending the response
    res.status(201).send("User created");
});
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});