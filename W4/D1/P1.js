//try catch basis
 const error = document.getElementById("error");
 
try{
    console.log("Trying to access undefined variable");
    console.log(notDefined);
}
catch(err){
    console.log("Error caught",err.name,"-",err.message);
    error.innerHTML ="Trying to access undefined variable"
}
console.log("Programe execution continues");

//JSON Parsing error
let JSONText = "{ json}";
try{
    let data = JSON.parse(JSONText);
    console.log(data);
}
catch{
    console.log("JSON parse error",err.message);
}

try{
    let num = 10;
    num();
}
catch(err){
    console.log("caught error",err.name);
}