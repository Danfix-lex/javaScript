const person = {
    name: "Danfix",
    age: 20,
    sex: "Male",
    complexiion: "Dark",
    stateOfOrigin: "Osun State",
    country: "Nigeria"
};
console.log(person);

function LogObject(number) {
    const car = { make: "Toyota", model: "Camry", Year: 2021};
    let curentCar = {};
    for (const [start, finish] in car) {
        currentCar += 
    }
    return number;
};

const laptop = {brand: "Dell", price: 1200};
laptop.colour = "Blue";
console.log(laptop);

function updatePrice(obj) {
  obj.price = "1500";
  obj = null;
}

const phone = {
  brand: "Apple",
  price: 999,
};

console.log(phone.price);

updatePrice(phone);

console.log(phone.price);

console.log(phone);


function updateName(person) {
    person.fullName = person.firstName + " " + person.lastName;
    return person;
}

const me = {firstName: "Daniel", lastName: "Ojo"};
updateName(me);
console.log(me);


function updateInfo(person) {
    person.information = "'" + "First Name: " + person.firstName + ", Last Name: " + person.lastName +", Age: " + person.age + "'";
    return person;
}

const danfix = {firstName: "Daniel", lastName: "Ojo", age: 20};
updateInfo(danfix);
console.log(danfix.information);
