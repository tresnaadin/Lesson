const express = require("express")
const manga = require("./routes/manga")
const users = require("./routes/users")
const Routes = express.Router()

Routes.use("/manga", manga)
Routes.use("/users", users)

module.exports = Routes
