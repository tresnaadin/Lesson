const express = require("express")
const controller = require("../Controller/Product")
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/", controller.add)
Route.put("/", controller.edit)
Route.get("/search", controller.search)
Route.get("/test/:name/:stock/:price", controller.test)

module.exports = Route
