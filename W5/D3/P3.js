//Handling the errors with try/catch

function loadCustomerProfile(){
    return new Promise((resolve, reject) => {
        const isserviceAvailable = true;

        if(isserviceAvailable){
            resolve("Sucess! Customer profile loaded");
        }else{
            reject("Unsuccessful!! customer profile unavilable");
        }
    });
}
async function showCustomerProfile(){
    try{
    const message =await loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("error",error);
    }
}
showCustomerProfile();
