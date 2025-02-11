const { getDetails } = require('./getDetails.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('get details', () => {
    // Arrange
    let answer = "John Doe";

    // Act
    let result = getDetails(student);

    // Assert
    expect(answer).toBe(result);
});