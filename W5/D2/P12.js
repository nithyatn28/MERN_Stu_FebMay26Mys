//chaining promises with centralized error
function  validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login validated");
        })
    })
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = true;
            if(accountFound){
                resolve("acc data found");
            }
            else{
                reject("acc data not found");
            }
        },700);
    })
}
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountmessage){
    console.log(accountmessage);
})
.catch(function(error){
    console.log("error:",error);
});

