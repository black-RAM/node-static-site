const http = require("node:http")

const server = http.createServer((req, res) => {
  res.writeHead(200, {"x-content-type-options": "text/html"})
  res.end("Hello, world!")
})

server.listen(8080)