// const details = [
//     {name: "Daniel", score: 80},
//     {name: "Samuel", score: 100},
//     {name: "Ogene", score: 70},
//     {name: "Sain", score: 100},
//     {name: "Ifeayin", score: 60},
//     {name: "Silk", score: 60},
//     {name: "Deji", score: 70},
//     {name: "January", score: 70},
//     {name: "February", score: 70},
//     {name: "March", score: 50},
// ]
const details = [80, 100, 70, 100, 60, 60, 70, 50, 40, 50]
function getScoresOfStudent(details) {
    return details.filter(number => number >= 70);
}

console.log(getScoresOfStudent(details));
module.exports = {getScoresOfStudent}