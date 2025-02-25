let animal = {
    name: "unknown",
    colour: "",
    sound: function() {
        return `${this.name} makes a sound`
    }
};

let dog = Object.create(animal);
dog.colour = "Black";
dog.name = "Smart";
console.log(dog)
console.log(dog.sound());

let cat = {}
Object.setPrototypeOf(cat, animal);
cat.colour = "Green";
cat.name = "Ginger";
console.log(cat);
console.log(cat.sound());


function Human(name, age, complexion) {
    this.name = name;
    this.age = age;
    this.complexion = complexion;

    this.describe =() =>{
        return `My name is ${this.name}, I am ${this.age} years old`
    }
}
let firstPerson = new Human("Daniel", 22, "Dark");
console.log(firstPerson);
console.log(firstPerson.describe())