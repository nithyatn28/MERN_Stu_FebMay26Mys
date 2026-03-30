const container = document.getElementById("container");
//position:
//beforebegin:
//afterbegin:
//beforend:
//beforend:
document.getElementById("btn").addEventListener("click",
     function(){
        container.insertAdjacentHTML("beforebegin","<p>Dynamically inserted</p>");
     }
);