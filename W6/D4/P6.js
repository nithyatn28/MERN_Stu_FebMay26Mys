//sendig response in JSON formate
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/api/status"&& req.method === "GET"){
        const responseData ={
            success:true,
            message:"API is working",
            server: "Nodejs HTTP Module"
        };
    //json response using application/json
    res.writeHead(200,{"content-Type":"application/json"});
    //JSON.sringify() convert js object into a JSON string
    res.end(JSON.stringify(responseData));
    return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({success:false,message:"Route not found"}));
});
server.listen(3001,function(){
    console.log("Server is runnig at http://localhost:3001");
});