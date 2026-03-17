//Introduction to callback function
function greetUser(name,monkey){
    console.log("Hello, "+ name);
      //callback function is exicuted only after the execution of the current function
    monkey();

}
function showComoletionMessage(){
    console.log("the greeting task is completed");
}

greetUser("Nithya",showComoletionMessage);