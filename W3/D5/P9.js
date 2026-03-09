const onceBtn = document.getElementById("onceBtn");

onceBtn.addEventListener("click",function(){
    console.log("this click listener work only once");
},{once:true});

//global shortcuts creation
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase==="s"){
        event.preventDefault();
        console.log("custom ctrl+s shortcut triggered");
    }
})