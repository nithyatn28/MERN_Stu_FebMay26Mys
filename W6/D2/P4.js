//Using the eventemiter class
const EventEmitter = require("events");//npm install lodash- for lodash
//create new event emiter instance
//this object can publish events and allow listeners
//to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaced" event.
//whenever the event is emitted the function  will execute
//once()register a listener that automaticaly removes itself  after running for the
orderEmitter.once("orderplaced",
    function(orderID){
        console.log("hello nithya waiting restaurent to accepet order",orderID)
    }
);
orderEmitter.once("orderplaced",
    function(orderID,name,orderValue){
        console.log("hello","restaurent accepet order",orderID)
    }
);

orderEmitter.once("orderplaced",
    function(orderID){
        console.log("Assiging delivery partner",orderID)
    }
);
orderEmitter.once("orderplaced",
    function(orderID){
        console.log("Abhi is your delivery partner",orderID)
    }
);

//emit the event with extra data
//this listenr recives theborderId value
orderEmitter.emit("orderplaced","ORd-2403001","nithya",10000);
orderEmitter.emit("orderplaced","ORd-2403001","nithya",10000);