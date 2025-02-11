const { addToAccountBalance } = require('./addToAccountBalance.js');
const account = {owner: "Alice", balance: 500}
const number = 500
test('get details', () => {
    // Arrange
    let answer = 1000;

    // Act
    let result = addToAccountBalance(account, number);

    // Assert
    expect(answer).toBe(result);
});