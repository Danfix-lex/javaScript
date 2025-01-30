const prompt = require('prompt-sync')();
function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32
};
let celsius = prompt("Enter your celsius to be converted to fahrenheit: ");
console.log(celsiusToFahrenheit(celsius));
