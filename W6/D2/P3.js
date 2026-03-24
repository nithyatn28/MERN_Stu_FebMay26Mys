//Event loop with multiple asynchronous task
console.log("Main scripted started");
setTimeout(()=> {
    console.log("Timer A finished after 500ms");
},500);
setTimeout(()=> {
    console.log("Timer B finished after 100ms");
},100);
setTimeout(()=>{
    console.log("Timer c finished after 0ms,but still waits fornsync code to complete");
},0);
console.log("Main scripted ended");