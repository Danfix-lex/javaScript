function getNumbersInDictionaryOrder(numbers) {
    let temporaryNumbers = {};
    
    for (let num of numbers) {
        if (num in temporaryNumbers) {
            temporaryNumbers[num] += 1;
        } else {
            temporaryNumbers[num] = 1;
        }
    }
    
    let sortedNumbers = [];
    let keys = Object.keys(temporaryNumbers).sort((a, b) => a - b);
    
    for (let key of keys) {
        for (let i = 0; i < temporaryNumbers[key]; i++) {
            sortedNumbers.push(Number(key));
        }
    }
    
    return sortedNumbers;
