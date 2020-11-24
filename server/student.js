const Student = require("../Classes/Users/Student");



function addStudent(socket, m){

    Student.addStudent(m.idNumber, m.firstName, m.lastName, m.address, m.phoneNumber)
    socket.emit("addStudent", m);

}
function listStudents(socket, msg){

    console.log("Sending students")
    socket.emit("listStudents", Student.students());
}


module.exports = {addStudent, listStudents};