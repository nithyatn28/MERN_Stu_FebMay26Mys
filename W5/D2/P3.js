//asyncronous approch of node js
console.log("step1:scripted started");
setTimeout(() =>{
    console.log("step3:Delayed callback fineshed.F1");
},1000);
setTimeout(function(){
    console.log("step3: Delayed callback fineshed.F2")
},1000);
console.log("step2: script does not stop while waiting");