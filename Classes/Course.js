class Course {
    constructor(id, name, hours, startDate, endDate){

        
        this.id = id;
        this.name = name;
        this.totalHours = hours;

        this.teachers = []
        this.students = []
        this.classRooms = []


        this.startDate = startDate;
        this.endDate = endDate;

        this.isStarted = false;
        this.isCourseCompleted = false;
        
        
         
    }
    addTeacher(t) {
        this.teachers.push(t)
    }
    removeTeacher(t){
        let found = this.teachers.findIndex(element => element === t)
        this.teachers.splice(found, 1)
    }
    addStudent(s){
        this.students.push(s)
    }
    removeStudent(s){
        let found = this.students.findIndex(element => element === s)
        this.students.splice(found, 1)
    }

    addClassRoom(r){
        this.classRooms.push(r)
    }
    removeClassRoom(r){
        let found = this.classRooms.findIndex(element => element === r)
        this.classRooms.splice(found, 1)
    }

    startCourse(){
        this.isStarted = true;
    }
    endCourse(){
        this.isCourseCompleted = true;
    }
    setStartDate(date){
        this.startDate = date;
    }
    setEndDate(date){
        this.endDate = date;
    }

}

//let newCourse = new Course("DP-M", "Designprinciper och Mönster", 10) 


module.exports = Course