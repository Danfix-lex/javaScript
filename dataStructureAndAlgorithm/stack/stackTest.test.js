const StackFunction = require("./stackFunction");


test('empty stack', () => {
    // Arrange
    let answer = true;

    // Act
    const stack = new StackFunction();
    let result = stack.emptyStack();

    // Assert
    expect(answer).toBe(result);
});


test('push element in stack', () => {
    // Arrange
    let answer = 3

    // Act
    const stack = new StackFunction();
    stack.pushStack(10);
    stack.pushStack(20);
    stack.pushStack(30);
    let result = stack.stackSize();

    // Assert
    expect(answer).toBe(result);
});


test('pop element in stack', () => {
    // Arrange
    let answer = 1

    // Act
    const stack = new StackFunction();
    stack.pushStack(10)
    stack.pushStack(20);
    stack.popStack(20)
    let result = stack.stackSize();

    // Assert
    expect(answer).toEqual(result);
});


test('peek element in stack', () => {
    // Arrange
    let answer = 50

    // Act
    const stack = new StackFunction();
    stack.pushStack(10);
    stack.pushStack(20);
    stack.pushStack(30);
    stack.pushStack(50);
    stack.peekStack(4)
    let result = stack.peekStack();

    // Assert
    expect(answer).toEqual(result);
});


test('stack size', () => {
    // Arrange
    let answer = 5

    // Act
    const stack = new StackFunction();
    stack.pushStack(10);
    stack.pushStack(20);
    stack.pushStack(14)
    stack.pushStack(50)
    stack.pushStack(12)
    let result = stack.stackSize()

    // Assert
    expect(answer).toEqual(result);
});


test('clear stack', () => {
    // Arrange
    let answer = 0

    // Act
    const stack = new StackFunction();
    stack.pushStack(10);
    stack.pushStack(20);
    stack.pushStack(10)
    stack.clearStack()
    let result = stack.stackSize();

    // Assert
    expect(answer).toEqual(result);
});