var socket = io()


function addCourse() {
    socket.emit("addCourse", "")
}
socket.on("addCourse", (msg) => {
    console.log(msg)
})

function listCourses() {
    socket.emit("listCourses", "")
}
socket.on("listCourses", (msg) => {
    console.log(msg)
})
function addStudent() {
    socket.emit("addStudent", "")
}
socket.on("addStudent", (msg) => {
    console.log(msg)
})
function listStudents() {
    socket.emit("listStudents", "")
}
socket.on("listStudents", (msg) => {
    console.log(msg)
})

function addTeacher() {
    socket.emit("addTeacher", "")
}
socket.on("addTeacher", (msg) => {
    console.log(msg)
})
function listTeachers() {
    socket.emit("listTeachers", "")
}
socket.on("listTeachers", (msg) => {
    console.log(msg)
})