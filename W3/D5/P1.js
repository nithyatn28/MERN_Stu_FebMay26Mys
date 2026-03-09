//Basics of click event
const button = document.getElementById("clickBtn");
button.addEventListener("click",function() {
    console.log("button is clicked");
});
button.addEventListener("click",function() {
    console.log("second eventlistener:button is clicked");
});
