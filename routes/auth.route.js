const express = require('express')
const route = express.Router()
const authController = require("../controller/auth.controller")
route.post("/signup",authController.signup)
route.post("/logout",authController.logout)
route.post("/login",authController.login)
module.exports = route