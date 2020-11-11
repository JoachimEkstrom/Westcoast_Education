function listStudents(socket){

    socket.emit("listStudents", "Students");
}


module.exports = listStudents;