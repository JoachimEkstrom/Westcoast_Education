let socket = io()

function addCourse() {

    let newCourse = {}

    newCourse.id = document.getElementById("id").value;
    newCourse.name = document.getElementById("name").value;
    newCourse.hours = document.getElementById("hours").value;
    newCourse.startDate = document.getElementById("startDate").value;
    newCourse.endDate = document.getElementById("endDate").value;

    socket.emit("addCourse", newCourse)
}
socket.on("addCourse", (msg) => {
    console.log("Course added!")
    console.log(msg)
})

function listCourses() {
    socket.emit("listCourses", "")
}

let courses

socket.on("listCourses", (msg) => {
    console.log(msg)
    courses = msg
    console.log(courses)


    let list = document.getElementById("list")
    list.textContent = "" // Deletes all child nodes
    
    if(msg){
        for(let i = 0; i< msg.length; i++){
            let id = document.createElement("section")
            id.setAttribute("id", msg[i].id)
            
            let name = document.createElement("h2")
            name.innerHTML = "Course name: " + msg[i].name
            id.appendChild(name)

            let start = document.createElement("p")
            start.innerHTML = "Start Time: " + msg[i].startDate
            id.appendChild(start)

            let button = document.createElement("button")
            button.innerHTML = "More info"
            button.setAttribute('onclick', `courseDetails(` + i +`)`) // Not working =/
            id.appendChild(button)

            list.appendChild(id)
        }
    }
})

function courseDetails(item){
    console.log(item)

    let node = document.getElementById(courses[item].id)
    node.textContent = ""

    let name = document.createElement("h2")
    name.innerHTML = "Course name: " + courses[item].name
    node.appendChild(name)

    let start = document.createElement("p")
    start.innerHTML = "Start time: " + courses[item].startDate
    node.appendChild(start)

    let end = document.createElement("p")
    end.innerHTML = "Ending at: " + courses[item].endDate
    node.appendChild(end)

    let hours = document.createElement("p")
    hours.innerHTML = "Hours total: " + courses[item].totalHours
    node.appendChild(hours)

}

