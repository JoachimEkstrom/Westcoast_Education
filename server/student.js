const Student = require("../Classes/Users/Student");


let students = []
function addStudent(socket, message){

    students.push(
        new Student(
            message.idNumber, 
            message.firstName, 
            message.lastName, 
            message.address, 
            message.phoneNumber
        ))

    console.log(students)


    socket.emit("addStudent", message);

}
function listStudents(socket, msg){

    console.log("Sending students")
    socket.emit("listStudents", students);
}


module.exports = {addStudent, listStudents};