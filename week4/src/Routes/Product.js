const express = require("express")
const controller = require("../Controller/Product")
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/", controller.add)
Route.put("/", controller.edit)
Route.get("/search", controller.search)

module.exports = Route
