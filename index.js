const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
  const routes = {
    "/": "./index.html",
    "/about": "./about.html",
    "/contact-me": "./contact-me.html",
    "/styles.css": "./styles.css"
  }

  const fileName = routes[req.url] || "404.html"
  const fileExt = fileName.match(/\.\w+$/)
  const readerConfig = { encoding: "utf8" }
  const readerCallback = (err, data) => {
    if(err) {
      console.error(err)
      return
    }
    res.end(data)
  }

  res.writeHead(200, {"x-content-type-options": "text/" + fileExt})
  fs.readFile(fileName, readerConfig, readerCallback)
})

server.listen(8080)