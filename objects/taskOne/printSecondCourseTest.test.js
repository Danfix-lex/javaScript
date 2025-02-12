const { printSecondCourse } = require('./printSecondCourse.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('print second course', () => {
    // Arrange
    let answer = 'Physics';

    // Act
    let result = printSecondCourse(student);

    // Assert
    expect(answer).toBe(result);
});