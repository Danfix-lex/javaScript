const { highestCommonFactor } = require('./HighestCommonFactor.js');
const numbers = [78]

test('print highest common factor', () => {
    // Arrange
    let answer = [2, 3, 13];

    // Act
    let result = highestCommonFactor(numbers);

    // Assert
    expect(answer).toEqual(result);
});