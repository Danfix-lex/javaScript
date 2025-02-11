const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

function printTotalNumberOfFruit(inventory) {
    let total = 0;
    for (let key in inventory) {
        total += inventory[key];
    }
    return total;
}

console.log(printTotalNumberOfFruit(inventory));
