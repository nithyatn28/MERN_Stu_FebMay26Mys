//throw custom errors
// 

function checkAge(age){
    if(age<18){
        throw new Error("Age must be 18 and above");
    }
    console.log("You Can Vote");
    return age;
}
try{
    //console.log(checkAge(20));
    console.log(checkAge(10));
}
catch(err){
    console.log("caught: ",err.message);
}


//create a custom error class
class ValidationError extends Error{
    constructor(message){  //constructor initialize the objects
        super(message);    // supper ivoke the parent class constructor
        this.name = "ValidationError";

    }

}
function createUser(name){
    if(!name){
        throw new ValidationError("Name is requried");
    }
    return {name};
}

try{
    //console.log(createUser());
    console.log(createUser("Nithya"));
}
catch(err){
    console.log("caught: ",err.message);
}
