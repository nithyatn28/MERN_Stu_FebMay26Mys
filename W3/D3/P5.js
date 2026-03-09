// basics of object
const person ={
name:"ravi",
age:23,
city:"mysore"
};
// console.log(person);
console.log(person.name);
console.log(person["name"]);
//add a new property
person.id = "01";
console.log(person);
//modify
person.age=31;
console.log(person);
//delete
delete person.id;
console.log(person);
//object constructor
const car = new Object();
car.make = "Audi";
car.model ="a4";
car.year ="2026";
console.log(car);