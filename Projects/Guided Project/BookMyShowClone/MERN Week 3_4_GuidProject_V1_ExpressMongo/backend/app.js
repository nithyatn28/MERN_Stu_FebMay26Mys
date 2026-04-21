const express = require("express");

const app = express();

app.use("/",(req,res) =>{
    res.status(200).json({
        success:true,
        message:"Movie booking Api is running...",
    });
});
module.exports = app;