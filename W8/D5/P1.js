//file upload using multer with file type and file size
const express = require("express");
const multer = require("multer");

async function main() {
    try{
        const app = express();
//mime : formate of file
        const fileFilter = (req,file,callback) =>{
            if(file.mimetype === "image/png" || file.mimetype === "image/jpg"){
                callback(null,true);
            }
            else{
                callback(new Error("Only png and jpeg images are allowed"),false);
            }
        };
        //Approch1: Using dest:
        const uploadWidthDest = multer({
            dest:"uploads/",
            limits:{fileSize: 1024 * 1024 * 2}, //2mb
            fileFilter
        });
        app.post("/upload-dest",uploadWidthDest.single("file"),(req,res)=>{
            res.send({
                message:"uploadedusing dest approch",
                note:"Filename is random, no extension preserved",
                file:req.file
            });
        });
        //approch2
        const storage = multer.diskStorage({
            destination:(req,res,callback)=>{
                callback(null,"uploads/");
            },
            //How to name the file 
            filename:(req,file,callback)=>{
                callback(null,Date.now()+"-"+file.originalname);
            }
        });
        const uploadWidthDisk = multer({
            storage,
            limits:{fileSize: 1024 * 1024 * 2}, //2mb
            fileFilter
        });
        app.post("/upload-disk",uploadWidthDisk.single("file"),(req,res)=>{
            res.send({
                message:"uploadedusing disk storage approch",
                note:"Filename is controlled, and extension preserved",
                file:req.file
            });
        });
        app.listen(3000,()=>{
            console.log("Server started on port http://localhost:3000");
            console.log("POST/upload-dest");
        });
    }
    catch(error){
        console.log("Error",error.message);
    }
}
main();