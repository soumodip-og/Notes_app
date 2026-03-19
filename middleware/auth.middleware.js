const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const authCheck = (req, res, next) => {

    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({
            "message": "Unauthorized"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRATE)
    req.user = decoded

    next()

}
module.exports = authCheck