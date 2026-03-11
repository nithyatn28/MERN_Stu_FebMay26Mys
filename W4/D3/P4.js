const jsonOutput = document.getElementById("jsonOutput");
 document.getElementById("saveBtn").addEventListener("click",function(){
     const user = {
         id : 101,
         name : "Nithya",
         role: "trainee",
         skills :["html","css"]
     };
     localStorage.setItem("userProfile",JSON.stringify(user));
     jsonOutput.textContent = "user object stored as string in the local storage";
    
 });
document.getElementById("readBtn").addEventListener("click",function(){
    const username = localStorage.getItem("userProfile");
    console.log(JSON.parse(username))
    console.log(username);
    jsonOutput.textContent = " userProfile" + username;
    
});