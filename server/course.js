const Course = require("../Classes/Course");

let courses = []

function addCourse(socket, m){

    courses.push(Course());
    courses[courses.length -1].addCourse(m.id, m.name, m.hours, m.startDate, m.endDate);
    socket.emit("addCourse", m);
}

function listCourse(socket, msg){

    console.log("Sending Courses")
    socket.emit("listCourses", courses);
}


module.exports = {addCourse, listCourse};