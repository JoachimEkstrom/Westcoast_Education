const Teacher = (function () {

    let teachers = []

    function _addTeacher(idNumber, firstName, lastName, address, phoneNumber){
        
        teachers.push({

        idNumber: idNumber,
        firstName: firstName,
        lastName:  lastName,
        address:  address,
        phoneNumber: phoneNumber,
        subjects: [],
        classes: [],
        })
        


    }
    function _returnTeachers() {
        return teachers
    }

    function _addSubject(subject){
        subjects.push(subject);
    }
    function _removeSubject(subject){
        let found = subjects.findIndex(element => element === subject);
        subjects.splice(found, 1);
    }
    function _addClass(newClass){
        classes.push(newClass);
    }
    function _removeClass(removeClass){
        let found = classes.findIndex(element => element === removeClass);
        classes.splice(found, 1);
    }

    return {
        addTeacher: _addTeacher,
        teachers: _returnTeachers,
        addSubject: _addSubject,
        removeSubject: _removeSubject,
        addClass: _addClass,
        removeClass: _removeClass,
    }


})()




module.exports = Teacher;