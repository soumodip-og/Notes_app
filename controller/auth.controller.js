const User = require('../model/authmodel')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')

dotenv.config()

const signup = async (req, res) => {

    const { email, password, username } = req.body
    if (!email || !password || !username) {
        return res.status(404).json({ "message": "all fields are needed" })
    }

    const isExsist = await User.findOne({ email })

    if (isExsist) {
        return res.status(402).json({ "message": "User already Exist" })
    }
    const hash = await bcrypt.hashSync(password, 10)
    try {
        const newUser = await User.create({
            username,
            email,
            password: hash

        })

        if (newUser) {
            const token = jwt.sign({ id:newUser._id }, process.env.JWT_SECRATE)
            res.cookie("token", token)

            res.status(200).json({
                "message": "user created",
                "user": newUser
            })
        }
    } catch (error) {
        res.send(500).json({ message: error.message })
        console.log(error)
    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ "message": "all feileds are needed" })
    }
    
    try {
        const loginUser = await User.findOne({email})
        const responce = await bcrypt.compare(password,loginUser.password)
        if(!responce){
            return res.status(401).json({"message":"invalid login"})
        }
        const token = jwt.sign({id:loginUser._id},process.env.JWT_SECRATE)
        res.cookie("token",token)
        res.status(200).json({"message":"user sucessfully Loggedin"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
    if(!loginUser){
        return res.status(401).json({"message":"invalid creadentials"})
    }

}
const logout = async (req, res) => {
    const { email } = req.body
    try {
        const isUser = await User.findOne({ email })
        console.log(isUser)
        if (!isUser) {
            return res.status(404).json({ "message": "user doese't exist" })

        }
        res.clearCookie("token")

        res.json({ "message": "user logged out" })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            "message": "internal server error"
        })

    }
}
module.exports = { signup, logout ,login}