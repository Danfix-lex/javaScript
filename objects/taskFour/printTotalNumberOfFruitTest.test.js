const { printTotalNumberOfFruit } = require('./printTotalNumberOfFruit.js');
const inventory = { apple: 10, banana: 5, orange: 8, mango: 12};
test('get details', () => {
    // Arrange
    let answer = 35;

    // Act
    let result = printTotalNumberOfFruit(inventory);

    // Assert
    expect(answer).toEqual(result);
});