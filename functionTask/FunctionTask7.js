const prompt = require('prompt-sync')();

function futureInvestmentValue(investmentAmount, annualInterestRate, years) {
    let monthlyInterestRate = annualInterestRate / 100 / 12; 
    let months = years * 12; 
    return investmentAmount * Math.pow(1 + monthlyInterestRate, months);
}

let investmentAmount = prompt("Enter your investment amount: ");
let annualInterestRate = prompt("Enter the annual interest rate: ");

console.log("Your future year value is:");
for (let year = 1; year <= 30; year++) {
    let futureValue = futureInvestmentValue(investmentAmount, annualInterestRate, year);
    console.log(year + "    " + futureValue.toFixed(2));
}
