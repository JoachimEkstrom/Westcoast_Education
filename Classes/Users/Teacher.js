const User = require("./User.js");

class Teacher extends User {
    constructor(idNumber, firstName, lastName, address, phoneNumber){
        super(idNumber, firstName, lastName, address, phoneNumber);
        
        this.subjects = [];
        this.classes = [];


        
        
         
    }

    addSubject(subject){
        this.subjects.push(subject);
        return this;
    }
    removeSubject(subject){
        let found = this.subjects.findIndex(element => element === subject);
        this.subjects.splice(found, 1);
        return this;
    }
    addClass(newClass){
        this.classes.push(newClass);
        return this;
    }
    removeClass(removeClass){
        let found = this.classes.findIndex(element => element === removeClass);
        this.classes.splice(found, 1);
        return this;
    }



}




module.exports = Teacher;