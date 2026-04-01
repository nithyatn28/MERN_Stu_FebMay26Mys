//JWT Fundamentals: token generation and verification
const jwt = require("jsonwebtoken");
const secretKey = "monkey123";
//payload holds small non sensitive data
const payload = {
    userId:101,
    role:"member"
};
//jwt.sign() create asigned jwt token
const token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

//console.log("Token generated successfully\n",token);

const tokenParts = token.split(".");
console.log("header section",tokenParts[0]);
console.log("payload section",tokenParts[1]);
console.log("signature section",tokenParts[2]);
console.log("JWT part count",tokenParts.length);
try{
    //jwt.verify() checks trust,signature and expiration
    const verifiedPayload = jwt.verify(token,secretKey); //use other than this seckret key the verification become fails
    console.log("Verified payload",verifiedPayload);
}
catch(error){
    console.log("Verification failed");
}
const decodeWithoutVerification = jwt.decode(token);
console.log("Decoded token",decodeWithoutVerification);