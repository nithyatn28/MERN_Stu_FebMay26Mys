//Reading the POST request body data
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/submit"&& req.method === "POST"){
        let body ="";
        //req here is a readable stream

        req.on("data",function(chunk){
            body +=chunk.toString();
        });
        req.on("end",function(){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Recived req body data:" +body);
        });
        return;
    }
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found");
});
//end executes whene the full request body has been recived
server.listen(3001,function(){
    console.log("Server is runnig at http://localhost:3001");
});