const digits = [7, 9, 9]
function arrayIncreament(digits) {
    const result = digits;
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] < 9) {
            result[i]++;
            return result;
        }
        else {
            result[i] = 0;
        }
    }
    result.unshift(1);
    return result;
}
console.log(arrayIncreament(digits));
module.exports = {arrayIncreament};