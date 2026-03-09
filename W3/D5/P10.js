const clickBtn  = document.getElementById("clickBtn");
const runClick  = document.getElementById("runClick");
const runMouseover  = document.getElementById("runMouseover");
const runKeydown  = document.getElementById("runKeydown");
const runDuplicate  = document.getElementById("runDuplicate");
const hoverBox  = document.getElementById("hoverBox");
clickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        console.log("enter key down");
    }
});
runClick.addEventListener("click",function(){
    clickBtn.click();
});
runMouseover.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("dispatching mouse event");
});

hoverBox.addEventListener("mouseover",function(){
    console.log("Programaticaly triggered mouseover");
});