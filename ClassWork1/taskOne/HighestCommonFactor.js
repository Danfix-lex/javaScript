function highestCommonFactor(numbers) {
    if (numbers.length === 0) return null;
    // if (numbers.length === 1) return numbers[0];

    let result = [];
    let currentNumbers = [...numbers];
    let divider = 2;

    while (divider <= Math.min(...currentNumbers)) {
        if (currentNumbers.every(num => num % divider === 0)) {
            result.push(divider);
            currentNumbers = currentNumbers.map(num => num / divider);
        } else {
            divider++;
        }
    }

    return result.length ? result : [1];
}

module.exports = { highestCommonFactor };