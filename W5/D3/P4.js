//combining multiple promise-based steps with async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"laptop",
                quantity:2
            });
        },1000)
    });
}
async function showOrderSummary() {
    const orderId = await getOrderId();
    console.log("order id",orderId);
    const orderDetails = await getOrderDetails();
    console.log("order details",orderDetails.product);
    console.log("order details",orderDetails.quantity);

}
showOrderSummary();