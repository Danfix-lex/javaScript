const { multiply, addTwoNumbers, divideTwoNumbers, getOddNumbers, getEvenNumbers } = require('./danfix.js');

    let numberOne = 2;
    let numberTwo = 6;

    test('multiply two numbers', () => {
        // Arrange
        let answer = 12;
        
        // Act
        let result = multiply(numberOne, numberTwo);
        
        // Assert
        expect(answer).toBe(result);
    });

    test('add two numbers', () => {
        // Arrange
        let answer = 8;
        
        // Act
        let result = addTwoNumbers(numberOne, numberTwo);
        
        // Assert
        expect(answer).toBe(result);
    });
    
    test('divide two numbers', () => {
        // Arrange
        let answer = 0.3333333333333333;
        
        // Act
        let result = divideTwoNumbers(numberOne, numberTwo);
        
        // Assert
        expect(answer).toBe(result);
    });
    
    test('return odd numbers', () => {
        // Arrange
        let arrayOfNumbers = [1, 2, 3, 4, 5];
        
        // Act
        let answer = [1, 3, 5]
        let result = getOddNumbers(arrayOfNumbers);

        
        // Assert
        expect(answer).toEqual(result);
    });
    
    test('return even numbers', () => {
        // Arrange
        let arrayOfNumbers = [1, 2, 3, 4, 5];
        
        // Act
        let answer = [2, 4]
        let result = getEvenNumbers(arrayOfNumbers);

        
        // Assert
        expect(answer).toEqual(result);
    });
