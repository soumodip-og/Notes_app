const express = require('express')
const app = express()
const noteRoute = require("./routes/notes.route")
const authRoute = require("./routes/auth.route")
const cookieparser = require("cookie-parser")
app.use(cookieparser())
app.use(express.json())
app.use("/api/notes",noteRoute)
app.use("/api/auth",authRoute)

module.exports = app