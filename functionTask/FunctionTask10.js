const prompt = require('prompt-sync')();
function footToMeter(foot) {
    return 0.305 * foot
};
let foot = prompt("Enter the amount of foot to be converted to meters: ");
console.log(footToMeter(foot));
