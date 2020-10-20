const express = require("express")
const product = require("./Routes/Product")
const Routes = express.Router()

Routes.use("/manga", product)

module.exports = Routes
