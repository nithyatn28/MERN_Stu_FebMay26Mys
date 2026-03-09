//reduce function
let nums = [5,10,15];
let Average = nums.reduce((intermediateSum,current) =>intermediateSum + current,0)/nums.length;
console.log(Average);

//reduce to object count category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((key,value) =>{key[value]=(key[value]|| 0) +1;
return key;
},{});
console.log(count);