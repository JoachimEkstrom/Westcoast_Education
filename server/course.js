const Course = require("../Classes/Course");

let courses = []

function addCourse(socket, message){

    courses.push(message)
    console.log(courses)

    socket.emit("addCourse", message);
}
function listCourse(socket, message){

    console.log("Sending Courses")
    socket.emit("listCourses", courses);
}


module.exports = {addCourse, listCourse};