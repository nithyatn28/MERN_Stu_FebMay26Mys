//Basic callback variations
//1. a callback with no input  data
//2.a callback that recives data from main function

function runTask(callback){
    console.log("task is running.");
      callback();
}
function runTaskWithResult(taskName,callback){
    console.log("processing task: ",taskName);
      callback("Task"+taskName+"finished successfully");
}
function showSimpleDemoMessage(){
    console.log("simple callback exicuted");
}
function showDetailedMessage(message){
    console.log(message);
}
//runTask(showSimpleDemoMessage);
runTaskWithResult("send monthly report",showDetailedMessage);