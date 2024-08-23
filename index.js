const express = require("express")
const app = express()
const PORT = 8080

const htmlSender = (res, fileNameWithoutExtension) => {
  res.sendFile("./src/" + fileNameWithoutExtension + ".html", { root: __dirname })
}

app.use(express.static("public"))
app.get("/", (_, res) => htmlSender(res, "index"))
app.get("/about", (_, res) => htmlSender(res, "about"))
app.get("/contact-me", (_, res) => htmlSender(res, "contact-me"))
app.all("*", (_, res) => htmlSender(res, "404"))

app.listen(PORT)