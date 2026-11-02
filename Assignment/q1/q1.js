const EventEmitter = require("events");

const bell = new EventEmitter();

// classStart event
bell.on("classStart", () => {
    console.log("Class Started");
});

// classEnd event
bell.on("classEnd", () => {
    console.log("Class Ended");
});

// Trigger the events
bell.emit("classStart");
bell.emit("classEnd");

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