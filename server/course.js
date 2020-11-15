const Course = require("../Classes/Course");

let courses = []

function addCourse(socket, m){

    courses.push(new Course(m.id, m.name, m.hours, m.startDate, m.endDate))
    console.log(courses)

    socket.emit("addCourse", m);
}
function listCourse(socket, msg){

    console.log("Sending Courses")
    socket.emit("listCourses", courses);
}


module.exports = {addCourse, listCourse};