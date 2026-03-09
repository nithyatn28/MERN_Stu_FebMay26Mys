// Switch Functions

function getRoute(role, isLoggedIn){
    if(isLoggedIn ){
        console.log("ok");
    }else{
        console.log("/login");
    }
}
getRoute();
    let isnotlogin = "isStudent";
switch (isnotlogin) {
    case "isAdmin":
        console.log("/admin");
         break;
    case "isStudent":    
        console.log("/student");
        break;
    case "isCollege":    
        console.log("/college");
        break;    
    case "isProctor":    
          console.log("/proctor");
          break;
    default:  
       console.log("denied");
    break;
}

const greet=function greet(name){
    console.log("Hello,"+name+" !");
}

greet("student");
