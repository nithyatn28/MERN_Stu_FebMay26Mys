//introduction to async/await
function getMessage(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("Async await makes promise based code easier to read");
        },1000);
    });
}
async function showMessage(){
    console.log("loading message...");
    const message = await getMessage();
    console.log(message);
}
showMessage();