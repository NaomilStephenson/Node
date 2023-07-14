/*
process.stdout.write('Hello World');
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write('Hello Naomi');
*/

// if not defined as a module in the package.json file
// const os = require('os');
// if a module then the above can be written as following
import os from 'os';

let total = os.totalmem();
let free = os.freemem();
let used = total - free;
let percentused = Number(100 * (used / total));

/*
console.log(`Total Memory = ${total}`);
console.log(`Free Memory = ${free}`);
console.log(`Using Memory = ${used}`);
console.log(`Using % = ${percentused}`);
*/

let freeRam =()=> {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`Using = ${percentused}`);
};

setInterval(freeRam(),500);