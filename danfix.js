function divideTwoNumbers(numberOne, numberTwo) {
    let answer = numberOne / numberTwo;
    return answer;
}

function addTwoNumbers(numberOne, numberTwo) {
    let answer = numberOne + numberTwo;
    return answer;
}

function multiply(numberOne, numberTwo) {
    let result = numberOne * numberTwo;
    return result;
}

const getOddNumbers = (arr) => {
    let newArray = [];
    for (element of arr) {
        if (element % 2 != 0) {
            newArray.push(element);
        }
    }
    return newArray;
}

const getEvenNumbers = (arr) => {
    let newArray = [];
    let count = 0;
    for (let index in arr) {
        if (arr[index] % 2 == 0) {
            newArray[count++] = arr[index];
        }
    }
    return newArray;
}
module.exports = {divideTwoNumbers, addTwoNumbers, multiply, getOddNumbers, getEvenNumbers};
