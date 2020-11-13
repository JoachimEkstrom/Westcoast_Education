const Student = require("../Classes/Users/Student");

function addStudent(socket){

    socket.emit("addStudent", (msg)=> {


    });
}
function listStudents(socket){

    socket.emit("listStudents", (msg)=> {


    });
}


module.exports = {addStudent, listStudents};