function addCourse(socket){

    socket.emit("addCourse", "Added Course");
}


module.exports = addCourse;