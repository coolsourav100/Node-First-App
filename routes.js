const fs = require('fs')
const requestHandler =(req,res)=>{
  let display = fs.readFileSync('requestedData.text')
  const url = req.url
  const method = req.method
  res.setHeader('Content-Type','text/html')
  if(url==='/'){
  res.write(`<html><body><h1>Welcome to the Node.Js Server ver 10.0.1</h1><h3>${display}</h3><form action='/home' method='POST'><input type='text' name = 'message'/><button>Send</button></form></body></html>`)
   return res.end()
  }
  if(url==='/home' && method==='POST'){
    const body=[]
    req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk)
    })
    let dummy
    req.on('end',()=>{
      const DataBody = Buffer.concat(body).toString()
      dummy=DataBody.split('=')[0]
      dummy = dummy.split('+').join(' ')
      console.log(dummy)
      fs.writeFile('requestedData.text',dummy ,(err)=>{
        res.setHeader('Location','/')
        res.statusCode = 302
        return res.end()
      })
    })
    // fs.writeFileSync('message.text',dummy)
    // res.write(`<html><body><h1>Welcome home</h1></body></html>`)
  }
  if(url==='/about'){
    res.write(`<html><body><h1>Welcome About us Page</h1></body></html>`)
    return res.end()
  }
  if(url==='/node'){
    res.write(`<html><body><h1>Welcome to node js Project</h1></body></html>`)
    return res.end()
  }
  // res.end()
}
module.exports = requestHandler