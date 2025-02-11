
function getDetails(student) {
    return `Hello ${name}`
}
function executeFunction(callBack, userName) {
    return callBack(userName)
}
let result = executeFunction(greet, firstName)
console.log(result);
module.exports = {getDetails};