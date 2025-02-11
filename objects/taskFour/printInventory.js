function printInventory(inventory) {
    for (let key in inventory) {
        console.log(`${key}: ${inventory[key]}`);
    }
    return inventory;
}
module.exports = {printInventory};
