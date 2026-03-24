// understanding path module and JSON module

const path = require("path");
//JSON is loded as a normal JS object in commomJS 

const appConfig = require("./support/app-config.json");
console.log("__dirname",__dirname);
console.log("__filename",__filename);

console.log("ApplicationName:",appConfig.appName);
console.log("Feature:",appConfig.features.join(", "));//join used to remove []
console.log("Environment:",appConfig.environment);