//innerText & textContent
//innnerText: visible rendered text only
//textContent: all text nodes regardless of css
//innerHTML: allows reading or writing HTml markup
//inside an element


const message = document.getElementById("message");
const textContentBtn = document.getElementById("textContentBtn");
const ContentBtn = document.getElementById("ContentBtn");


document.getElementById("innerTxtBtn").addEventListener(
    "click",function(){
        message.innerText = "Update using this.innerText";
    }
);


 document.getElementById("textContentBtn").addEventListener(
    "click",function(){
        message.textContentBtn = "Update using this.textContentBtn";
    }
    
);
document.getElementById("reset").addEventListener(
    "click",function(){
        message.innertext= "originalmessage";
    }
    
);
const box = document.getElementById("Box");
document.getElementById("innerHTMLBtn").addEventListener(
    "click",function(){
        message.innerHTML= "<strong>Original</strong> Content";
    }
    
);