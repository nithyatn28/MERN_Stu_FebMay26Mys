//conditional statements
 let age = 20;
 if(age < 13){
    console.log("child");
    }
 else if(age<18){
     console.log("teenager");
    }
else{
    console.log("Adult");
    }
//switch statements
console.log("Switch statements");
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("start of the week");
        break;
    case "Tuesday":
        console.log("2nd of the week");
        break;
    case "wednesday":
        console.log("start of the week");
        break;
    case "Thrusday":
        console.log("mid of the week");
        break;
    case "Friday":
        console.log("end of the week");
        break;
    default:
            console.log("some day in the week");
            break;
        

}
// Type conversion
let n = Number("ABC");
console.log("n",n,"type of n:",typeof n, "isNaN",isNaN(n));