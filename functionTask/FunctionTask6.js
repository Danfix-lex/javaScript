const prompt = require('prompt-sync')();
function displayPatterns(numbers) {
    let count = numbers;
    let pattern = '';

    for (let i = 1; i <= count; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += j + ' ';
        }
        pattern += line + '\n';
    }
    
    return pattern;
}

let numbers = prompt("Enter your number: ");
console.log(displayPatterns(numbers));

