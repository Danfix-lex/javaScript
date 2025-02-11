function addToAccountBalance(account, number) {
    const amount = parseFloat(number);
    if (isNaN(amount)) {
        throw new Error('Please enter a valid number');
    }
    account.balance += amount;
    return account.balance;
}

const account = {owner: "Alice", balance: 500};
let number = 500
try {
    const newBalance = addToAccountBalance(account, number);
    console.log(`New balance: ${newBalance}`);
} catch (error) {
    console.error(error.message);
}
module.exports = {addToAccountBalance};