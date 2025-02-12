const { squareOfNumbers } = require('./squareOfNumbers.js');
const details = [2, 4, 6, 8, 10]

test('add new property', () => {
    // Arrange
    let answer = [4, 16, 36, 64, 100];

    // Act
    let result = squareOfNumbers(details);

    // Assert
    expect(answer).toEqual(result);
});