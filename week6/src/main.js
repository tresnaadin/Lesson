const express = require("express")
const manga = require("./routes/manga")
const users = require("./routes/users")
const auth = require("./routes/auth")
const Routes = express.Router()

Routes.use("/manga", manga)
Routes.use("/users", users)
Routes.use("/auth", auth)

module.exports = Routes
