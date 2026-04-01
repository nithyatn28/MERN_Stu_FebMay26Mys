//Protecting routes with JWT middleware and role based access
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const secretkey = "monkey123";


const userToken = jwt.sign({userId:1,role:"user",email:"anju@email.com"},secretkey,{expiresIn:"1h"});
console.log("Usertoken",userToken);
const adminToken = jwt.sign({userId:2,role:"admin",email:"sanju@email.com"},secretkey,{expiresIn:"1h"});
console.log("admin token",adminToken);
function authenticateToken(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            success:true,
            message:"Authorization header is missing"
        });
    }
    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            success:true,
            message:"Beare token is missing"
        });
    }
    try{
        //verify token and attach trusted user datanto the request
        req.user = jwt.verify(token,secretkey);
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
            success:false,
            message:"token has expired"
        });
        }
        return res.status(403).json({
            success:false,
            message:"token is invalid"
        });
        
    }
}
function requireRole(role){
    return function(req,res,next){
        if(req.user.role!=role){
            return res.status(403).json({
            success:false,
            message:"insufficient permission"
        });
        }
        next();
    };
}
app.get("/me",authenticateToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route access",
        user:req.user
    });
});
app.get("/admin",authenticateToken,requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Protected admin route access",
        user:req.user
    });
});
app.listen(4000,function(){
    console.log("JWT sever running at http://localhost:4000");
});