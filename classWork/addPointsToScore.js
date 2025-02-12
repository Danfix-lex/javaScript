const details = [85, 92, 78, 88, 95]
function addPointsToScore(details) {
    return details.map(number => number + 5);
}

console.log(addPointsToScore(details));
module.exports = {addPointsToScore}