function addStudent(socket){

    socket.emit("addStudent", "Added student");
}


module.exports = addStudent;