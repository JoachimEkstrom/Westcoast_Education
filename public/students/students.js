let socket = io()

function addStudent() {

    let newStudent = {}

    newStudent.id = document.getElementById("id").value;
    newStudent.firstName = document.getElementById("firstname").value;
    newStudent.lastName = document.getElementById("lastname").value;
    newStudent.address = document.getElementById("address").value;
    newStudent.phoneNumber = document.getElementById("phonenumber").value;

    socket.emit("addStudent", newStudent)
}
socket.on("addStudent", (msg) => {
    console.log("Student added!")
    console.log(msg)
})

function listStudents() {
    socket.emit("listStudents", "")
}

let students

socket.on("listStudents", (msg) => {
    students = msg
    console.log(students)


    let list = document.getElementById("list")
    list.textContent = "" // Deletes all child nodes
    
    if(msg){
        for(let i = 0; i < students.length; i++){
            let id = document.createElement("section")
            id.setAttribute("id", students[i].id)
            
            let name = document.createElement("h2")
            name.innerHTML = "Name: " + students[i].firstName + " " + students[i].lastName
            id.appendChild(name)

            let address = document.createElement("p")
            address.innerHTML = "Address: " + students[i].address
            id.appendChild(address)

            let phoneNumber = document.createElement("p")
            phoneNumber.innerHTML = "Phonenumber: " + students[i].phoneNumber
            id.appendChild(phoneNumber)

            list.appendChild(id)
        }
    }
})

// function studentDetails(item){
//     console.log(item)

//     let node = document.getElementById(students[item].id)
//     node.textContent = ""

//     let name = document.createElement("h2")
//     name.innerHTML = "Kursnamn: " + students[item].name
//     node.appendChild(name)

//     let start = document.createElement("p")
//     start.innerHTML = "Starttid: " + students[item].start
//     node.appendChild(start)

//     let end = document.createElement("p")
//     end.innerHTML = "Sluttid: " + students[item].end
//     node.appendChild(end)

//     let hours = document.createElement("p")
//     hours.innerHTML = "Antal timmar totalt: " + students[item].hours
//     node.appendChild(hours)

// }

