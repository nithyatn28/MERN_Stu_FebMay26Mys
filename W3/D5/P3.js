//mouseover event
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover",function() {
    hoverBox.textContent = "mouse is over me";
    hoverBox.style.backgroundColor = "lightyellow";
});

hoverBox.addEventListener("mouseout",function() {
    hoverBox.textContent = "mouse is over me";
    hoverBox.style.backgroundColor = "";
})