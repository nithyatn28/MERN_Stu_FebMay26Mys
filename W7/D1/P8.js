//Route parameters and query parameters
// parameters: capture dynamic values from the path
//queryparameter : provide optional values
const express = require("express");

const app =express();
app.get("/products/:id",function(req,res){
    res.json({
        routeparameter:req.params.id,
        queryparameter:req.query
    });
});
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});