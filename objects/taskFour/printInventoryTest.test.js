const { printInventory } = require('./printInventory.js');
const inventory = { apple: 10, banana: 5, orange: 8, mango: 12};
test('get details', () => {
    // Arrange
    let answer = {"apple": 10, "banana": 5, "mango": 12, "orange": 8};

    // Act
    let result = printInventory(inventory);

    // Assert
    expect(answer).toEqual(result);
});