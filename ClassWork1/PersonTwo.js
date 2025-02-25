const Person = require("./ClassWorkOne");

class PersonTwo extends Person {
    #colour;

    constructor(name, age, language, colour) {
        super(name, age, language);
        this.#colour = colour;
    }

    getColour() {
        return this.#colour;
    }
}

let PersonThree = new PersonTwo("Daniel", 22, "Igbo", "Black");
let PersonFour = new PersonTwo("Daniel", 22, "Chinese", "Black");

console.log(PersonFour.getLanguage());
console.log(PersonThree.getLanguage());
