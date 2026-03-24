//microtaskand the macrotask in NodeJS
console.log("1.Synchronous start");

// //Promise.resolve(...).then(...) schedule a microtask
// Promise.resolve().then(function(){
//     console.log("3. Promise microtask executed.");
// });
//serTimeout(...,0)schedules task for a later time.
//even with 0 delay it still wait for the sync exicuited
setTimeout(() =>{
    console.log("4.Timer callback executed");
},0);
//Promise.resolve(...).then(...) schedule a microtask
Promise.resolve().then(function(){
    console.log("3. Promise microtask executed.");
});
console.log("2.synchronous end");