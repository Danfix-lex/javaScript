const array = []; // LITERAL METHOD

const arrayOfNumbers = new Array(2); // ARRAY CONSTRUCTOR
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 2;
arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

let firstName = "Daniel";

let newArray = Array.from(firstName);
console.log(newArray);

let pop = arrayOfNumbers.pop();

console.log(arrayOfNumbers);
console.log(pop);

let shift = arrayOfNumbers.shift();
console.log(arrayOfNumbers);
console.log(shift);

// let animalsOne = ["dog", "chicks", "goat", "fish", "rat", "sheep"];
// console.log(animalsOne.slice(3));

let animalsTwo = ["dog", "chicks", "goat", "fish", "rat", "sheep", "sheGoat"];
let answer = animalsTwo.splice(4, 2, "chicken", "fowl");
console.log(answer);
console.log(animalsTwo);