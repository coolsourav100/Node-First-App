const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req)
  console.log("SOurav")
})

server.listen(4000)