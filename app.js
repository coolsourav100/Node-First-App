const http = require('http')

const server = http.createServer((req,res)=>{
  const url = req.url
  res.setHeader('Content-Type','text/html')
  if(url==='/'){
  res.write(`<html><body><h1>Welcome to the Node.Js Server</h1></body></html>`)
  }
  if(url==='/home'){
    res.write(`<html><body><h1>Welcome home</h1></body></html>`)
  }
  if(url==='/about'){
    res.write(`<html><body><h1>Welcome About us Page</h1></body></html>`)
  }
  if(url==='/node'){
    res.write(`<html><body><h1>Welcome to node js Project</h1></body></html>`)
  }
  // res.end()
})

server.listen(4000)