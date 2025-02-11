function subtractFromAccountBalance(account, number) {
    const amount = parseFloat(number);
    if (amount > account.balance) {
        throw new Error('Please enter a valid number');
    }
    account.balance -= amount;
    return account.balance;
}

const account = {owner: "Alice", balance: 500};
let number = 500
try {
    const newBalance = subtractFromAccountBalance(account, number);
    console.log(`New balance: ${newBalance}`);
} catch (error) {
    console.error(error.message);
}
module.exports = {subtractFromAccountBalance};