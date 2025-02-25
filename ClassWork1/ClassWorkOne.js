class Person {
    #name;
    #age;
    #language;

    constructor(name, age, language) {
        this.#name = name;
        this.#age = age;
        this.#language = language;
    }

    setLanguage(language) {
        this.#language = language;
    }

    getLanguage() {
        return this.#language;
    }
}

let personOne = new Person("Daniel", 22, "Yoruba");
console.log(personOne.getLanguage());

module.exports = Person;
