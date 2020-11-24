const Course = (function () {

    let teachers = []
    let students = []
    let classRooms = []
    let courses = []

    function _addCourse(iid, iname, ihours, istartDate, iendDate){

        courses.push({
            id : iid,
            name: iname,
            hours: ihours,
            startDate: istartDate,
            endDate: iendDate,
            isStarted: false,
            isCourseCompleted: false,
        })        
       
    };

    function _courses(){
        return courses
    }
         
   
    function _addTeacher(t) {
        teachers.push(t)
    };
    function _removeTeacher(t){
        let found = teachers.findIndex(element => element === t)
        teachers.splice(found, 1)
    };
    function _addStudent(s){
        students.push(s)
    };
    function _removeStudent(s){
        let found = students.findIndex(element => element === s)
        students.splice(found, 1)
    };

    function _addClassRoom(r){
        classRooms.push(r)
    };
    function _removeClassRoom(r){
        let found = classRooms.findIndex(element => element === r)
        classRooms.splice(found, 1)
    };

    function _startCourse(){
        isStarted = true;
        console.log(isStarted)
    };
    function _endCourse(){
        isCourseCompleted = true;
    };
    function _setStartDate(date){
        startDate = date;
    };
    function _setEndDate(date){
        endDate = date;
    }; 

    return {
        addCourse:          _addCourse,
        courses:            _courses,
        addTeacher:         _addTeacher,
        removeTeacher:      _removeTeacher,
        addStudent:         _addStudent,
        removeStudent:      _removeStudent,
        addClassRoom:       _addClassRoom,
        removeClassRoom:    _removeClassRoom,
        startCourse:        _startCourse,
        endCourse:          _endCourse,
        setStartDate:       _setStartDate,
        setEndDate:         _setEndDate,

    }


})()

module.exports = Course