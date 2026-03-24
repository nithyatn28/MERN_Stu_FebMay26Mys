//process.nextTick, promise microtask & Timer
console.log("1.start of the script");

//process.nextTick schedules a callback to run soon after the current synchronous code completes
process.nextTick(function(){
    console.log("3.process.nextTick callback executed");
});

//Promise microtask runs after nextTick in NodeJS
Promise.resolve().then(function(){
    console.log("4. promise microtaskexecuted");
});

//callback timer run later
setTimeout(() =>{
    console.log("5.Timer callback executed")
},0);
console.log("2.End of script");