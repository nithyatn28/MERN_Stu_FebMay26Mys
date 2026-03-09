const startBtn = document.getElementById("startBtn");
const removeBtn = document.getElementById("removeBtn");
 function handelClick(){
    console.log("startBtn clicked");

 }
 startBtn.addEventListener("click",handelClick);
 removeBtn.addEventListener("click",function(){
    startBtn.removeEventListener("click",handelClick());
    console.log("click listener removed from startBtn");
 });