const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("Hello World")
    res.end()
})

server.listen(8000,()=>{
    console.log('App is running');
})

console.log("working")