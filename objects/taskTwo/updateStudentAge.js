function updateStudentAge(student) {
    student.age = student.age + 1;
    return student.age;
}
module.exports = {updateStudentAge};