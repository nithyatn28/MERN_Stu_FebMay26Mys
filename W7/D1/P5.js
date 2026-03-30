//Middleware order and route-specific middleware
// Middleware usage in ExpressJS
//Middleware runs during the request-response cycle
///Middleware can inspect or change the request before a route responds
//next() passes controle to the next step
const express = require("express");

const app =express();

//Global middleware this runs for every rquest
app.use(function(req,res,next){
    console.log("Global Middleware",req.method,res.url);
    next();
});
app.get("/",function(req,res){
    
    res.send("Home route");
});
app.get("/admin",function(req,res,next){
    
    console.log("Route specific for middleware /admin ");
    next();
},function(req,res){
    
    res.send("Admin route reached");
});

app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});