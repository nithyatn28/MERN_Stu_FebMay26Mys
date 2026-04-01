//Generating to using login function and verifying the Tokens
const jwt = require("jsonwebtoken");
const secretKey = "monkey123";
function loginUser(email,password){
    if(email=="ce@email.com" && password==="mp123"){
        const token = jwt.sign(
            {
                userId:101,
                email:email,
                role:"student"
            },secretKey,{expiresIn:"1h"});
            return{
                success:true,
                token:token
            };
        
    }
    return{
                success:false,
                message:"Invalid credentials"
                
            };
}
const loginResult =loginUser("ce@email.com","mp123");
console.log("login result",loginResult);
const ns = "ws"
if(loginResult.success){
    try{
        const verifiedPayload = jwt.verify(loginResult.token,ns); 
            console.log("Verified payload",verifiedPayload);
    }
    catch(error){
    console.log("Verification failed invalid signature");
    }
}