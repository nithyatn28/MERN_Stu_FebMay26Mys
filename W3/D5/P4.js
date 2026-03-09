//keyboard event:keydown
const input = document.getElementById("nameInput");
const display = document.getElementById("display");
input.addEventListener("keydown",function(event){
    console.log("Key press",event.key);
    display.textContent = "key pressed is"+event.key;
});
