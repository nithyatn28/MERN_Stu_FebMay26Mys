console.log("array basics");
//creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"Rx"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//using constructor
let fruits = new Array("apple","mango","banana");
console.log(fruits);
console.log("is fruits is an array?",Array.isArray(fruits));
fruits.push("cherry");//add
console.log(fruits);
fruits.pop();//delete
console.log(fruits);
//unshift:adds element to the begining
fruits.unshift("orange");
console.log(fruits);
//shift:remove from begining
fruits.shift();
console.log(fruits);