const Admin = require("../Classes/Users/Admin");


function addAdmin(socket){

    socket.emit("addAdmin", (msg)=> {
        

        
    });
}


module.exports = addAdmin;