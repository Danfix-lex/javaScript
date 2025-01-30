const prompt = require('prompt-sync')();

function displaySortedNumbers(number1, number2, number3) {
    let sortedNumbers = [];

    if (number1 >= number2 && number1 >= number3) {
        sortedNumbers.push(number1);
        if (number2 >= number3) {
            sortedNumbers.push(number2, number3);
        } else {
            sortedNumbers.push(number3, number2);
        }
    } else if (number2 >= number1 && number2 >= number3) {
        sortedNumbers.push(number2);
        if (number1 >= number3) {
            sortedNumbers.push(number1, number3);
        } else {
            sortedNumbers.push(number3, number1);
        }
    } else {
        sortedNumbers.push(number3);
        if (number1 >= number2) {
            sortedNumbers.push(number1, number2);
        } else {
            sortedNumbers.push(number2, number1);
        }
    }

    return sortedNumbers;
}

let number1 = prompt("Enter your first number: ");
let number2 = prompt("Enter your second number: ");
let number3 = prompt("Enter your third number: ");

console.log(displaySortedNumbers(number1, number2, number3));

