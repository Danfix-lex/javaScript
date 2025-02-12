const { getScoresOfStudent } = require('./getScoresOfStudent.js');
const details = [80, 100, 70, 100, 60, 60, 70, 50, 40, 50]

test('add new property', () => {
    // Arrange
    let answer = [80, 100, 70, 100, 70];

    // Act
    let result = getScoresOfStudent(details);

    // Assert
    expect(answer).toEqual(result);
});