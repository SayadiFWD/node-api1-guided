const server = require("./sever")
const Port = 5000

server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})