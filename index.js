const course = require("./server/course");
const student = require("./server/student");
const teacher = require("./server/teacher");
const admin = require("./server/admin");

const express = require('express');
const app = express();    
const router = express.Router()
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/public/')));


app.get('/admin', function (req, res) {
  res.sendFile("/admin/admin.html", {root: "./public"})
})

app.get('/addAdmin', function (req, res) {
  res.sendFile("/admin/addAdmin.html", {root: "./public"})
})
app.get('/student', function (req, res) {
  res.sendFile("/students/student.html", {root: "./public"})
})
app.get('/addStudent', function (req, res) {
  res.sendFile("/students/addStudent.html", {root: "./public"})
})
app.get('/teacher', function (req, res) {
  res.sendFile("teachers/teacher.html", {root: "./public"})
})
app.get('/addTeacher', function (req, res) {
  res.sendFile("teachers/addTeacher.html", {root: "./public"})
})
app.get('/courses', function (req, res) {
  res.sendFile("courses/courses.html", {root: "./public"})
})
app.get('/addCourse', function (req, res) {
  res.sendFile("courses/addCourse.html", {root: "./public"})
})


// let berra = new Course("234", "Test", 16)
// berra.setEndDate("2020-11-15")
// berra.setStartDate("2020-11-14")

// let glen = new Course("23asd4", "Tasdasdest", 324)
// berra.setEndDate("2050-11-15")
// berra.setStartDate("2050-11-14")


// console.log(berra)
// console.log(glen)








io.on('connection', (socket) => {
    console.log('a user connected');
        
    socket.on('addCourse',(msg)=> {

        course.addCourse(socket, msg);

    });

    socket.on('listCourses',(msg)=> {

        course.listCourse(socket, msg);

    });
    socket.on('addStudent',(msg)=> {

        student.addStudent(socket, msg);

    });
    socket.on('listStudents',(msg)=> {

        student.listStudents(socket, msg);

    });
});

http.listen(8081, () => {
  console.log('listening on *:8081');
});




