//loging
 console.log("Console loging");
 console.warn("Warning message");
 console.error("error message");

 let users = [
    {id:1,name:"Abhi"},
    {id:1,name:"Ani"}
 ];
 console.log(users);
 console.table(users);

 //Group related logs 
 console.group("Grouped logs");
 console.log("log1");
 console.log("log2");
 console.log("log3");
 console.groupEnd();
 //measure the execution time
 console.time("LoopTimer");
 for(let i=0; i<1000;i++){}
 console.timeEnd("LoopTimer");