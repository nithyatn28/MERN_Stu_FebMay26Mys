//callback function
// is a function which is pass as an arrgument to another function
function greetUser(name, callback){
    console.log("hellow",name);
    callback();
}
greetUser("nithya",function(){
    console.log("clallback function executed");
})