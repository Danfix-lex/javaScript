const prompt = require('prompt-sync')();
function meterToFoot(meter) {
    return meter / 0.305
};
let meter = prompt("Enter the amount of meters to be converted to foot: ");
console.log(meterToFoot(meter));
