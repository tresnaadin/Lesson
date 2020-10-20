const express = require("express")
const controller = require("../Controller/Product")
const Route = express.Router()

Route.get("/", controller.all)

module.exports = Route
