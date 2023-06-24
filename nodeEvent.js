var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log("😇 L-5 in nodeEvent.js=> ", "Hello World");
};

eventEmitter.on("now", myEventHandler);

eventEmitter.emit("now");
