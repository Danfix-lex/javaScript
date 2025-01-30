const prompt = require('prompt-sync')();
function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)
};
let fahrenheit = prompt("Enter your fahrenheit to be converted to celsius: ");
console.log(fahrenheitToCelsius(fahrenheit));
