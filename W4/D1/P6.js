// //finally
// function example(){
//     try{
//         console.log("example in try block");
//         return "TRY_RETURN";
//     }

// finally{
//     console.log("this is priented:");
// }
// }
// console.log("Example result:",example());

//return in catch block
function example(){
    try{
    try{
        throw new Error("New error")
    }
    catch(e){
        console.log("Example 1: caught error");
       // return 10;
       throw(e);
    }
    finally{
        console.log("Example 1: caught error");
    }
}
catch(e){
    console.log("Example 1 outer catch",e.message);
}
}
console.log("Example 1:",example());