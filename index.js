const Course = require("./Classes/ClassCourse");

let express = require("express")
let server = express();





let berra = new Course("234", "Test", 16)
berra.setEndDate("2020-11-15")
berra.setStartDate("2020-11-14")

let glen = new Course("23asd4", "Tasdasdest", 324)
berra.setEndDate("2050-11-15")
berra.setStartDate("2050-11-14")


console.log(berra)
console.log(glen)



server.get("/", (req, res)=> {
    res.send({berra, glen})
})

server.listen(8081, ()=> {
    console.log("Server is running at port 8081")
})