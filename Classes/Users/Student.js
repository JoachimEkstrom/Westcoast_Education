const User = require("./User.js");

class Student extends User {
    constructor(idNumber, firstName, lastName, address, phoneNumber, schoolClass){
        super(idNumber, firstName, lastName, address, phoneNumber);
        
        this.grades = [];
        this.schoolClass = schoolClass;
         
    }

    addGrade(subject, grade){
        this.subjects.push({subject: subject, grade: grade});
        return this;
    }
    removeGrade(subject){
        let found = this.grades.findIndex(element => element.subject === subject);
        this.grades.splice(found, 1);
        return this;
    }
    changeClass(newClass){
        this.schoolClass = newClass;
        return this;
    }

}

module.exports = Student;