//Json store key value pair data
const checkBtn = document.getElementById("checkBtn");
 checkBtn.addEventListener("click",function(){
    console.log("local storage check",typeof localStorage!=="undefined");
    console.log("session storage check",typeof sessionStorage!=="undefined");
    console.log("localStorage object",localStorage);
    console.log("sessionStorage object",sessionStorage);
 });