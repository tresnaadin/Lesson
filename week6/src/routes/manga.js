const express = require("express")
const controller = require("../controller/manga")
const validate = require("../middleware/validate")
const Route = express.Router()

Route.get("/", validate, controller.all)
Route.post("/", validate, controller.add)
Route.put("/", controller.edit)

module.exports = Route
