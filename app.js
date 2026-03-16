const express = require('express')
const app = express()
const noteRoute = require("./routes/notes.route")
app.use(express.json())
app.use("/api/notes",noteRoute)

module.exports = app