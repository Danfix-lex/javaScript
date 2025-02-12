const { printStudentName } = require('./printStudentName.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('print student name', () => {
    // Arrange
    let answer = 'John Doe';

    // Act
    let result = printStudentName(student);

    // Assert
    expect(answer).toBe(result);
});