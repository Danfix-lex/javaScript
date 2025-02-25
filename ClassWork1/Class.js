class Human{
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    set firstName(name){
        this.#name = name;
    }

    get firstName(){
        return this.#name;
    }
}
let human = new Human("Daniel", 22);
console.log(human.firstName);
module.exports = Human;