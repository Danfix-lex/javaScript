const prompt = require('prompt-sync')();
function calculateCommission(amount) {
    let commissionRate = 0;

    if (amount <= 10000) {
        commissionRate = 0.09; 
    } else if (amount <= 50000) {
        commissionRate = 0.10;
    } else if (amount <= 100000) {
        commissionRate = 0.11;
    } else {
        commissionRate = 0.12; 
    }

    return amount * commissionRate;
}

let amount = prompt("Enter your amount");
console.log(calculateCommission(amount));

