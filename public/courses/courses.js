let socket = io()

function addCourse() {

    let newCourse = {}

    newCourse.id = document.getElementById("id").value;
    newCourse.name = document.getElementById("name").value;
    newCourse.hours = document.getElementById("hours").value;
    newCourse.start = document.getElementById("start").value;
    newCourse.end = document.getElementById("end").value;

    socket.emit("addCourse", newCourse)
}
socket.on("addCourse", (msg) => {
    console.log("Course added!")
    console.log(msg)
})

function listCourses() {
    socket.emit("listCourses", "")
}

socket.on("listCourses", (msg) => {
    console.log(msg)

    let list = document.getElementById("list")
    list.textContent = "" // Deletes all child nodes
    
    if(msg){
        for(i = 0; i< msg.length; i++){
            let id = document.createElement("section")
            id.setAttribute("id", msg[i].id)
            
            let name = document.createElement("h2")
            name.innerHTML = msg[i].name
            id.appendChild(name)

            let start = document.createElement("p")
            start.innerHTML = msg[i].start
            id.appendChild(start)

            let button = document.createElement("button")
            button.innerHTML = "More info"
            button.setAttribute("onclick", `courseDetails(${msg[i].id})`) // Not working =/
            id.appendChild(button)

            list.appendChild(id)
        }
    }
})

function courseDetails(item){
    console.log(item)

    let node = document.getElementById(item.id)
    //node.textContent = ""
    console.log(node)

    let name = document.createElement("h2")
    name.innerHTML = item.name
    node.appendChild(name)

    let start = document.createElement("p")
    start.innerHTML = item.start
    node.appendChild(start)

    let end = document.createElement("p")
    end.innerHTML = item.end
    node.appendChild(end)

    let hours = document.createElement("p")
    hours.innerHTML = item.hours
    node.appendChild(hours)

    list.appendChild(node)
}

