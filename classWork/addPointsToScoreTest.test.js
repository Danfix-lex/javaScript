const { addPointsToScore } = require('./addPointsToScore.js');
const details = [85, 92, 78, 88, 95]

test('add new property', () => {
    // Arrange
    let answer = [90, 97, 83, 93, 100];

    // Act
    let result = addPointsToScore(details);

    // Assert
    expect(answer).toEqual(result);
});