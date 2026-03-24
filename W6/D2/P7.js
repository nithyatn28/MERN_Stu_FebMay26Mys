//setImmediate vs setTimeout
console.log("Scheduling setTimeout and setImmediate");

//callback timer
setTimeout(() => {
    console.log("Timer callback from setTimeout");
},0);
//setimmediate callback
setImmediate(function(){
    console.log("setImmedeate callback executed.");
});
console.log("both callbacks are waiting for the event loop");