// How Cookie is used to track session ID
//Simulated server-side session store
const sessionStore ={
    "abc123":{
        userId:101,
        userName:"nithya",
        role:"student"
    }
};
//Simulated browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId]; 
console.log("Server-side session Data",sessionData);