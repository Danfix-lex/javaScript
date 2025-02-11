const { updateStudentAge } = require('./updateStudentAge.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('update student age', () => {
    // Arrange
    let answer = 23;

    // Act
    let result = updateStudentAge(student);

    // Assert
    expect(answer).toBe(result);
});