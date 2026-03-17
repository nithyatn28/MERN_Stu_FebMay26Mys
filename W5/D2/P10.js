//chaining promises with returned values
function getBaseAmount(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1000);
        },500);
    });
}
getBaseAmount()
.then(function(amount){
    console.log("base amount",amount);
    return amount+200;
})
.then(function(updatedAmount){
    console.log("After services charge ",updatedAmount);
    return updatedAmount-100
})
.then(function(finalAmount){
    console.log("finall amount after discount ",finalAmount);
});
