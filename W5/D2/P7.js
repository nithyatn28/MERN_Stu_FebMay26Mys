//callback handling with name function
function loadUser(next){
    setTimeout(function(){
        console.log("step1:user loaded");
        next();
    },400);
}
function loadOrders(next){
    setTimeout(function(){
        console.log("step2:orders loaded");
        next();
    },400);
}
function loadPayments(next){
    setTimeout(function(){
        console.log("step3:payments loaded");
        next();
    },400);
}
function loadShipment(next){
    setTimeout(function(){
        console.log("step4:shipment loaded");
        console.log("Same flow but easier to read");
    },200);
}
loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment();
        });
    });
});