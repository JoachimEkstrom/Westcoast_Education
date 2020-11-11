const User = require("./User.js");

class Admin extends User {
    constructor(idNumber, firstName, lastName, address, phoneNumber, position){
        super(idNumber, firstName, lastName, address, phoneNumber);
        
        this.position = position;

        
        
         
    }
    changePosition(newPos){
        this.position = newPos;
        return this;
    }



}




module.exports = Admin;