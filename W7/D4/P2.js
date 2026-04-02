//setting and reading cookies
const express =require("express");
const cookieParser = require("cookie-parser");
const app = express();
//reads the cookie request header and places the parsed value into req.cookie 
app.use(cookieParser());
app.get("/set-language",function(req,res){
    res.cookie("language","english",{
        maxAge:60*60*1000
    });
    res.send("language cookie set to'english' ");
});
app.get("/read-language",function(req,res){
    const laguage = req.cookies.laguage;
    res.json({
        message:"Cookie read from request",
        laguage:laguage || "no language cookie found"
    });
});
app.listen(4000, function () {
    console.log("JWT demo server running @ http://localhost:4000");
});
