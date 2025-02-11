const { subtractFromAccountBalance } = require('./subtractFromAccountBalance.js');
const account = {owner: "Alice", balance: 500}
const number = 500
test('get details', () => {
    // Arrange
    let answer = 0;

    // Act
    let result = subtractFromAccountBalance(account, number);

    // Assert
    expect(answer).toBe(result);
});