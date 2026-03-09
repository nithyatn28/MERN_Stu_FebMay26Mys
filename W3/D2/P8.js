//default parameters
function product (a=1,b=1){
    return a*b;
}
console.log("product of 15 and 4 :",product(15,4));
console.log("product of 15  :",product(15));//use default parameter whenparameter missing 

//Rest parameters
function sumofAll (...numbers){
    console.log(...numbers);
}
sumofAll(1,2,3);
sumofAll(10);
