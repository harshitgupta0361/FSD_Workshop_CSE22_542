const EventEmitter = require('events');

const schoolBell = new EventEmitter();

// Creating events
schoolBell.on('classStart', () => {
    console.log("Class Started! Students, please be seated.");
});

schoolBell.on('classEnd', () => {
    console.log("Class Ended! Students can leave.");
});

// Triggering events
schoolBell.emit('classStart');
schoolBell.emit('classEnd');

// Event Loop demonstration
setTimeout(() => {
    console.log("setTimeout: Ring Bell!");
}, 0);

setImmediate(() => {
    console.log("setImmediate: Ring Bell!");
});

process.nextTick(() => {
    console.log("process.nextTick: Ring Bell!");
});

console.log("School Bell System Running...");