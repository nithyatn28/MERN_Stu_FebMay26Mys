// this file creates and exports a custom eventemitter instance
const EventEmitter = require("events");
 //custom eventemitter object
 const bookingEmitter = new EventEmitter();
 module.exports =bookingEmitter;