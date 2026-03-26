//handling rdiffrent GET routes
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method ==="GET"&& req.url==="/"){
        res.writeHead(200,{"content-type":"Text/plain"});
        res.end("Home page /Dashboard");
        return;
    }
    if(req.method ==="GET"&& req.url==="/about"){
        res.writeHead(200,{"content-type":"Text/plain"});
        res.end("About Route. Welcome to About Us page");
        return;
    }
    if(req.method ==="GET"&& req.url==="/products"){
        res.writeHead(200,{"content-type":"Text/plain"});
        res.end("products route. Welcome to product page");
        return;
    }
    if(req.method ==="GET"&& req.url==="/users"){
        res.writeHead(200,{"content-type":"Text/plain"});
        res.end("Returning all users.");
        return;
    }
    //POST=create
    //curl -X POST http://localhost:3001/users
    //curl:stands for Client URL: it is free open source CLI tool used to tranfer data to or from a server using various network protocol.
    if(req.method ==="POST"&& req.url==="/users"){
        res.writeHead(201,{"content-type":"Text/plain"});
        res.end("New user created.");
        return;
    }
    //unknown route fallback
    res.writeHead(404,{"content-type":"Text/plain"});
    res.end("Route not found");
});
server.listen(3001,function(){
    console.log("Server is runnig at http://localhost:3001");
});