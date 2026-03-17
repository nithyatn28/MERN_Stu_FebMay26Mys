//callback nesting
console.log("Starting nested callback flow");
setTimeout(function(){
    console.log("step1:user loaded");
    setTimeout(function(){
        console.log("Step2:orders loaded");
        setTimeout(function(){
            console.log("step3:payments loaded");
            setTimeout(function(){
                console.log("step4: shipment loaded");
                console.log("We are in callback hell!!!");
            },1000);
        },8000);
    },600);
},400);