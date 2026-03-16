console.log("Node JS Architecture demo");
console.log("1.script started");

//SetTimeOut
setTimeout(()=>{
    console.log("3.Timer callback finished after waiting");
},1000);
console.log("2.script continued without waiting for timer callback");