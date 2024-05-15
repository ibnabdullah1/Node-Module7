const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// First listener
myEmitter.on("Birthday", () => {
  console.log("HAPPY BIRTHDAY TO YOU");
});
myEmitter.emit("Birthday");
