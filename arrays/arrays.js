const array = []; // LITERAL METHOD

const arrayOfNumbers = new Array(2); // ARRAY CONSTRUCTOR
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 2;
arrayOfNumbers.push(1);
arrayOfNumbers.push(2);
arrayOfNumbers.push(3);

let firstName = "Daniel";

let newArray = Array.from(firstName);
console.log(newArray);