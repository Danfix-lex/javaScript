const prompt = require('prompt-sync')();
function getPentagonalNumber(n) {
    let number = n * (3 * n - 1) / 2; 
    return number
};
let n = prompt("Enter your number: ");
console.log(getPentagonalNumber(n));
