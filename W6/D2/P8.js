// Handling the error event in EventEmitter
const EventEmitter = require("events");

const fileEmitter = new EventEmitter();

//register an error listener
fileEmitter.on("error",function(error){
    console.log("Emitter handler error",error);
});
//register an normal event listener:happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("file processed successfuly",fileName);
});
fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","file processing failed");