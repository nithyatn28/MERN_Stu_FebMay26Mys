//immediate invoke function expression IIFE
//without parameters
(function(){
    console.log("Basic IIFE executed immediately");
})();
//with parameters
(function(appname,version){
    console.log("appname",appname,"version",version);
})("nodejs","v22.22.0"); 

//withreturn value
const result = (function(){
    const a = 10,b = 20;
    return a+b;
})();
console.log("sum is =",result);
