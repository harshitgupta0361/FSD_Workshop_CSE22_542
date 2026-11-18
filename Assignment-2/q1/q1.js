const EventEmitter = require("events");

const bell = new EventEmitter();

// classStart event
bell.on("Class-Starter", () => {
    console.log("Class Start");
});

// classEnd event
bell.on("Class-Ended", () => {
    console.log("Class End");
});

// Trigger the events
bell.emit("Class-Starter");
bell.emit("Class-Ended");

// Event Loop

setTimeout(() => {
    console.log("setTimeout: Ring Bell");
}, 0);

setImmediate(() => {
    console.log("setImmediate: Ring Bell");
});

process.nextTick(() => {
    console.log("nextTick: Ring Bell");
});