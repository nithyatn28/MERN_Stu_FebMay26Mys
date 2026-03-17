//introduction to promises
console.log("Program Started");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("welcome to promise");
        },1000)
    });
}
const messagePromise = getWelcomeMessage();
console.log("Promise created result not ready yet");

messagePromise.then(function(message){
    console.log(message);
});
console.log("program continues while the promise is pending");