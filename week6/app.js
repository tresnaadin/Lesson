require('dotenv/config')
const express = require("express")
const corss = require("cors")
const server = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const routes = require("./src/main")
const database = require("./src/config/db")
const port = 9000

// Enable cors
server.use(corss())

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(morgan("dev"))

server.use("/v1", routes)

database
    .connect()
    .then((result) => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log("Database not connected")
    })

server.listen(port, () => {
    console.log(`Service running on port ${port}`)
})
