const prompt = require('prompt-sync')();
function getSumOfDigits(number) {
    let sum = 0;
    let num = number;
    
    if (num < 0) {
        num = -num;
    }
    
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return sum;
};
let number = prompt("Enter your number: ");
console.log(getSumOfDigits(number));
