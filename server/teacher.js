const Teacher = require("../Classes/Users/Teacher");


function addTeacher(socket){

    socket.emit("addTeacher", (msg)=> {

        
    });
}


module.exports = addTeacher;