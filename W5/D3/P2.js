//why use of async/await
function getUser(){
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve({id:101,name:"karna"});
        },1000);
    });
}
function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },20000);
    })
    
}
async function showUserAndOrders(){
    const user =  getUser();
    console.log("User loaded",user.name);
    const order = await getOrders(user.id);
    console.log("Orders areloaded",order);
}
showUserAndOrders();