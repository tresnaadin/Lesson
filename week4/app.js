const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const routes = require("./src/main")
const port = 9001

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(morgan("dev"))

server.use(routes)

server.listen(port, () => {
    console.log(`Service running on port ${port}`)
})
