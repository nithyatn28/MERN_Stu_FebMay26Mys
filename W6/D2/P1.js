//understanding the event loop
console.log("1.synchronous task started");
//setTimeout schedule a callback for later.
setTimeout(()=>{
    console.log("3. Timer callback executed");
},0);

console.log("2. synchronuous task finished.");