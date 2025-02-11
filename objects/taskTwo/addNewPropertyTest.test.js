const { addNewProperty } = require('./addNewProperty.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('add new property', () => {
    // Arrange
    let answer = {"GPA": 3.8};

    // Act
    let result = addNewProperty(student);

    // Assert
    expect(answer).toEqual(result);
});