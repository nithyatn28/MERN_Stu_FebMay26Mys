//Routing:nested routs
// "/" base url
// "/api/users"
const express = require("express");

const app =express();
//"api/users" /create /delete /update /:id
//group
//router object help organize route groups
const apiRouter = express.Router();
apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api route"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"orders route inside api route"
    });
});
//mounting the router under the /api base path
app.use("/api",apiRouter);

//new Router 
const productsRouter = express.Router();
// "/api/product" create product
productsRouter.post("/",(req,res)=>{
    res.json({
        route:"/api/products",
        message:"create products"
    });
});
// "/api/products/:id" -> delete products
productsRouter.delete("/:id",(req,res)=>{
    res.json({
        route:`/api/products/${req.params.id}`,
        message:"delete products"
    });
});
apiRouter.use("/products",productsRouter);
app.listen(4000,function(){
    console.log("Express sever running at http://localhost:4000");
});