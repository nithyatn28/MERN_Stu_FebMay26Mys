//promise state pending fulfilled,rejected
const fulfilledPromise = new Promise(function(monkey){
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        monkey("fulfilledPromise is fulfiled");
    },1000)
});
const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectPromise is pending");

    setTimeout(function(){
        resolve("rejectPromise is rejected");
    },100)
});
fulfilledPromise.then(function(message){
    console.log(message);
});
fulfilledPromise.catch(function(message){
    console.log(message);
});
