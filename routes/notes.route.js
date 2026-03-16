const express = require('express')
const route = express.Router()
const noteController = require("../controller/note.controller")
route.post("/create",noteController.create)
route.post("/delete",noteController.deleteNote)
route.post("/update",noteController.updateNote)

module.exports = route
