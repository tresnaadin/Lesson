const express = require("express")
const controller = require("../controller/manga")
const Route = express.Router()

Route.get("/", middle, controller.all)
Route.post("/", controller.add)
Route.put("/", controller.edit)

module.exports = Route
