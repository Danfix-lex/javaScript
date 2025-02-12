const { printSecondEmployeeName } = require('./printSecondEmployeeName.js');
const details = {
    company: "TechCorp",
    location: "San Francisco",
    employees: ["Daniel", "Samuel", "Ogene", "Stephen", "Leke"],
    id: [1, 2, 3, 4, 5],
    department: ["Engineering", "HR", "Marketing"],
    workForce: {daniel: "Engineering", samuel: "Engineering", ogene: "HR", stephen: "Marketing", leke: "HR"}
}
test('print second employee name', () => {
    // Arrange
    let answer = "Samuel";

    // Act
    let result = printSecondEmployeeName(details);

    // Assert
    expect(answer).toBe(result);
});