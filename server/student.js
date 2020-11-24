const Student = require("../Classes/Users/Student");


let students = []
function addStudent(socket, m){

    students.push(Student());
    students[students.length -1].addStudent(m.idNumber, m.firstName, m.lastName, m.address, m.phoneNumber)


    socket.emit("addStudent", m);

}
function listStudents(socket, msg){

    console.log("Sending students")
    socket.emit("listStudents", students);
}


module.exports = {addStudent, listStudents};