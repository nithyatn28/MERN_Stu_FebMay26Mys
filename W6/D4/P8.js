//Parsing the JSON request bodies
const http = require("http");
const server = http.createServer(function(req,res){
    if(req.url === "/api/users"&& req.method === "POST"){
        let body ="";

        req.on("data",function(chunk){
            body +=chunk.toString();
        });
        req.on("end",function(){
            try{
                const parsed = JSON.parse(body);
                res.writeHead(201,{"Content-Type":"application/json"});
                res.end(JSON.stringify({
                    success:true,
                    recived:parsed
                }));
            }
            catch(error){
                res.writeHead(400,{"Content-Type":"application/json"});
                res.end(JSON.stringify({ 
                    success:false,
                    message:"Invalid json body"
                 }));
                 
            }
            
        });
        return;
    }
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found");
});
server.listen(3001, function () {
    console.log("server is runinng at http://localhost:3001");

});
