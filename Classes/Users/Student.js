const Student = (function (){
    
    let students = []

    function _addStudent(idNumber, firstName, lastName, address, phoneNumber, schoolClass){
        
         students.push({
            idNumber: idNumber,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber,
            grades: [],
            schoolClass: schoolClass,
         })       

         
    }
    function _returnStudents() {
        return students
    }
    function _addGrade(subject, grade){
        this.subjects.push({subject: subject, grade: grade});
    }
    function _removeGrade(subject){
        let found = this.grades.findIndex(element => element.subject === subject);
        this.grades.splice(found, 1);
    }
    function _changeClass(newClass){
        this.schoolClass = newClass;
    }

    return {
        addStudent :    _addStudent,
        students:       _returnStudents,
        addGrade:       _addGrade,
        removeGrade:    _removeGrade,
        changeClass:    _changeClass,

    }
})()

module.exports = Student;