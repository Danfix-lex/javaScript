const Human = require("./Class");

class Person extends Human{
    #gender;

    constructor(name, age, gender){
        super(name, age);
        this.#gender = gender;
    }
}

let personOne = new Person("Daniel", 22, "Male");