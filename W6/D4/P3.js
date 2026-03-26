//inspecting request details in an server
const http = require("http");

const server = http.createServer(function(req,res){
    //writeHead() is used to set the response status code and headers
    res.writeHead(200,{"Con-Type":"Text/plain"});
    //end() sends the response body and close the response
    //reu.methodtell the http method,such as GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});
server.listen(3001,function(){
    console.log("Server is runnig at http://localhost:3001");
});