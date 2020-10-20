const express = require("express")
const controller = require("../controller/manga")
const chache = require("../middleware/chace")
const upload = require("../middleware/upload")
const Route = express.Router()

Route.get("/", chache, controller.all)
Route.post("/", upload.single("image"), controller.add)
Route.put("/", controller.edit)

module.exports = Route
