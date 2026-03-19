const express = require('express')
const route = express.Router()
const noteController = require("../controller/note.controller")
const authMiddleware = require("../middleware/auth.middleware")
route.post("/create",authMiddleware,noteController.create)
route.get("/getNotes",authMiddleware,noteController.getNotes)
route.post("/delete",noteController.deleteNote)
route.post("/update",noteController.updateNote)

module.exports = route
