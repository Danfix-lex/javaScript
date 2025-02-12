const { arrayIncreament } = require('./arrayIncreament.js');
const digits = [3, 4, 2];
test('array increament', () => {
    // Arrange
    let answer = [3, 4, 3];

    // Act
    let result = arrayIncreament(digits);

    // Assert
    expect(answer).toEqual(result);
});