//usage of built-in and third party modules
//path is a built in module,so it work without installation
const path = require("path");

const invoicePath = path.join("invoices","2026","invoice-001.txt")
console.log("built-in module result:",invoicePath);

//to use third party package/module
try{
    const_ = require("lodash");
    console.log("Third-party module example");
}
catch(error){
    console.log("third-party module 'lodash' is not installed");
}