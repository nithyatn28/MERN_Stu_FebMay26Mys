//Arrow function
(args) = {
    //body of the function
}
//Add two numbers
const Sum = (a,b) => {
    return a+b;
}
console.log("3+5=",Sum(3,5));//this way use only to display result without using extra result store variable
//single line return /implicit return
const square = x => x*x;
console.log("square of 44 is:",square(44));
const sayHello = () => console.log("hellow from arrow function");
sayHello();
