const Teacher = function () {
    function _addTeacher(idNumber, firstName, lastName, address, phoneNumber){
             
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        
        this.subjects = [];
        this.classes = [];

    }

    function _addSubject(subject){
        this.subjects.push(subject);
    }
    function _removeSubject(subject){
        let found = this.subjects.findIndex(element => element === subject);
        this.subjects.splice(found, 1);
    }
    function _addClass(newClass){
        this.classes.push(newClass);
    }
    function _removeClass(removeClass){
        let found = this.classes.findIndex(element => element === removeClass);
        this.classes.splice(found, 1);
    }

    return {
        addTeacher: _addTeacher,
        addSubject: _addSubject,
        removeSubject: _removeSubject,
        addClass: _addClass,
        removeClass: _removeClass,
    }


}




module.exports = Teacher;