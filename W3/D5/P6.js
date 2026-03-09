const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit",function(e){
    event.preventDefault();//stoping the page reload
    if(username.value.trim()===""){
        message.textContent = "username is requried";
        console.log("Form blocked:no input for username");
        return;
    }
    message.textContent ="Form handle by JS for user",username.value;
    console.log("Form submited with username",username.value);
});