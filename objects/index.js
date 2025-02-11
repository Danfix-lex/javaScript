const student = {name: "John Doe", age: 22, courses: ["Math", "Physics", "Computer Science"], address:{city: "New York", zip: 10001,}}
console.log(student);

function printStudentName(student) {
    return student.name;
}
console.log(printStudentName(student));

function printSecondCourse(student) {
    return student.courses[2]
}
console.log(printSecondCourse(student));

function printZipCodeFromAddress(student) {
    return student.address.zip;
}
console.log(printZipCodeFromAddress(student));

function updateStudentAge(student) {
    student.age = student.age + 1;
    return student.age;
}
console.log(updateStudentAge(student));

function addNewProperty(student) {

}








let inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};
