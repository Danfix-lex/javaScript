function getInformation() {

    function getMen() {
        let numberOfMen = 23;
        return numberOfMen
    };
    
    function getLadies() {
        let numberOfLadies = 23;
        return numberOfLadies
    };
    return getMen() === getLadies()
};

console.log(getInformation());

function getInformation() {
    const getMen = () => {
        let numberOfMen = 23;
        return numberOfMen
    };
    
    const getLadies = () => {
        let numberOfLadies = 23;
        return numberOfLadies
    };
    return getMen() === getLadies()
};

console.log(getInformation());

function count() {
    let value = 0;
    return {
        increament: function() {
            return value ++
        },
        decreament: () => {
            return value --
        },
        getValue: function() {
            return value
        }
    }
};
let counter = count()
counter.increament();
console.log(counter.getValue());

let firstName = "Daniel"
function greet(name) {
    return `Hello ${name}`
};

function executeFunction(callBack, userName) {
    return callBack(userName)
}
let result = executeFunction(greet, firstName)
console.log(result);
