const prompt = require('prompt-sync')();
function isPalindrome(number) {
    let reversedNumber = 0;
    let num = number;
    
    if (num < 0) {
        return false;
    }
    
    let originalNum = num;
    
    while (num > 0) {
        reversedNumber = reversedNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return reversedNumber === originalNum;
};
let number = prompt("Enter your number: ");
console.log(isPalindrome(number));
