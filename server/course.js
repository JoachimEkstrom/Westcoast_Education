const Course = require("../Classes/Course");

function addCourse(socket, m){

    Course.addCourse(m.id, m.name, m.hours, m.startDate, m.endDate)
    socket.emit("addCourse", m);

}

function listCourse(socket, msg){

    console.log("Sending Courses")
    socket.emit("listCourses", Course.courses());
}


module.exports = {addCourse, listCourse};