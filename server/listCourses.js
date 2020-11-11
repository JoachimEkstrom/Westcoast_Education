function listCourses(socket){

    socket.emit("listCourses", "listCourses");
}


module.exports = listCourses;