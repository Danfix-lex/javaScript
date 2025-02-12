const { printZipCodeFromAddress } = require('./printZipCodeFromAddress.js');
const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}

test('print zip code from address', () => {
    // Arrange
    let answer = 10001;

    // Act
    let result = printZipCodeFromAddress(student);

    // Assert
    expect(answer).toBe(result);
});