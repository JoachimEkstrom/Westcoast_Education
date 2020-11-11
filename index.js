const Course = require("./Classes/Course");
const Admin = require("./Classes/Users/Admin");
const Teacher = require("./Classes/Users/Teacher");
const Student = require("./Classes/Users/Student");
const addCourse = require("./server/addCourse");
const listCourses = require("./server/listCourses");
const addStudent = require("./server/addStudent");
const listStudents = require("./server/listStudents");

const express = require('express');
const app = express();    
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));



let berra = new Course("234", "Test", 16)
berra.setEndDate("2020-11-15")
berra.setStartDate("2020-11-14")

let glen = new Course("23asd4", "Tasdasdest", 324)
berra.setEndDate("2050-11-15")
berra.setStartDate("2050-11-14")


console.log(berra)
console.log(glen)








io.on('connection', (socket) => {
    console.log('a user connected');
        
    socket.on('addCourse',(msg)=> {

        addCourse(socket);

    });

    socket.on('listCourses',(msg)=> {

        listCourses(socket);

    });
    socket.on('addStudent',(msg)=> {

        addStudent(socket);

    });
    socket.on('listStudents',(msg)=> {

        listStudents(socket);

    });
});

http.listen(8081, () => {
  console.log('listening on *:8081');
});




