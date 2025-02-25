const QueueFunction = require("./queueFunction");


test('empty queue', () => {
    // Arrange
    let answer = true;

    // Act
    const queue = new QueueFunction()
    let result = queue.emptyQueue();

    // Assert
    expect(answer).toEqual(result);
});

test('enqueue element inside queue', () => {
    // Arrange
    let answer = 2;

    // Act
    const queue = new QueueFunction()
    queue.addQueue(10);
    queue.addQueue(20);
    let result = queue.queueSize();

    // Assert
    expect(answer).toBe(result);

});

test('dequeue element inside queue', () => {
    // Arrange
    let answer = 2;

    // Act
    const queue = new QueueFunction()
    queue.addQueue(10);
    queue.addQueue(20);
    queue.addQueue(30);
    queue.addQueue(40);
    queue.removeQueue(20);
    queue.removeQueue(40);
    let result = queue.queueSize();

    // Assert
    expect(answer).toBe(result);
});

test('clear element inside queue', () => {
    // Arrange
    let answer = 0;

    // Act
    const queue = new QueueFunction()
    queue.addQueue(10);
    queue.addQueue(20);
    queue.addQueue(30);
    queue.addQueue(40);
    queue.addQueue(50);
    queue.clearQueue()
    let result = queue.queueSize()

    // Assert
    expect(answer).toBe(result);
});

test('check queue size', () => {
    // Arrange
    let answer = 5;

    // Act
    const queue = new QueueFunction()
    queue.addQueue(10);
    queue.addQueue(20);
    queue.addQueue(30);
    queue.addQueue(40);
    queue.addQueue(50);
    let result = queue.queueSize()

    // Assert
    expect(answer).toBe(result);
});

test('peek element in queue', () => {
    // Arrange
    let answer = 30;

    // Act
    const queue = new QueueFunction()
    queue.addQueue(10);
    queue.addQueue(20);
    queue.addQueue(30);
    let result = queue.peekQueue()

    // Assert
    expect(answer).toBe(result);
});