const jwt = require("jsonwebtoken");
const user = require("../models/User");
const User = require("../models/User");

//authmiddleware creation
exports.protect = async(req,res,next)=>{
    try{
        let token;
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.authorization.split(" ")[1];
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"not authorized, token missing"
            });
        }
        //verify the token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //get user from DB
        const user =  await User.findById(decoded.id);
        if(!users){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        //Atached users to request
        req.user = user;
        next();
    }
    catch(error){
        return res.status(401).json({
                success:false,
                message:"Invalid or expired token"
            });
    }
}