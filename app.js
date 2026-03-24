const express = require('express')
const app = express()
const noteRoute = require("./routes/notes.route")
const authRoute = require("./routes/auth.route")
const cookieparser = require("cookie-parser")
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieparser())
app.use(express.json())
app.use("/api/notes",noteRoute)
app.use("/api/auth",authRoute)

module.exports = app