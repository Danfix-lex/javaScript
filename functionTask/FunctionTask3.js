// Return the reversal of an integer, e.g. reverse(456) returns 645
const prompt = require('prompt-sync')();
function reverse(number) {
    let reversedNumber = 0;
    let num = number;
    
    let isNegative = num < 0;
    if (isNegative) {
        num = -num;
    }
    
    while (num > 0) {
        reversedNumber = reversedNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return isNegative ? -reversedNumber : reversedNumber;
};
let number = prompt("Enter your number: ");
console.log(reverse(number))
