//filter
let price = [100,200,300,400];
let priceWithGST = price.map(price =>price+price*0.18);
console.log("price without tax",price);
console.log("price with tax",priceWithGST);
//using map to extract files
let user = [
    {name:"Arjun",age:24},
    {name:"Krish",age:28}
];
let names =user.map(user => user.name);
console.log("",names);
//filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);
console.log(marks);
console.log(passed);
let students = [
    {name:"Anu",score:75},
     {name:"Anju",score:65}
];
let qualifiedstudent = students.filter(s =>s.score>70 ).map(s => s.name);
console.log(qualifiedstudent);
