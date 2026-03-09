//array map
let numArray = [100,200,300,400];
let s = numArray.map(numArray =>numArray*numArray);
console.log(s);
//array map
let price = [100,200,300,400];
let priceWithGST = price.map(price =>price+price*0.18);
console.log("price without tax",price);
console.log("price with tax",priceWithGST);
