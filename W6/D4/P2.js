//Creating a simple http sever
const http = require("http");

//createServer():creates  http sever instance
//Accepts a callback with two important objects
//request object: incoming request details
//response object: outgoing response control

const server = http.createServer(function(req,res){
    //writeHead() is used to set the response status code and headers
    res.writeHead(200,{"Con-Type":"Text/plain"});
    //end() sends the response body and close the response
    res.end("Hello from the NodeJS HTTP server");
});
//listen() binds the server to a port and starts accepting requests
server.listen(3000,function(){
    console.log("Server is runnig at http://localhost:3000");
})