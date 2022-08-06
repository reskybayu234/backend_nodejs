const http = require("http");
const fs = require('fs');

http.createServer((req,res) => {
  if(req.url === "/"){
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">button</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(req.url === "/message" && req.method === "POST"){
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=");
      console.log(message)
      fs.writeFileSync("message.txt", message[1])
    })
    
    res.statusCode = 300
    res.setHeader('Location','/');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my node.js server!</h1></body>');
  res.write('</html>');
  res.end();
}).listen(8000);

