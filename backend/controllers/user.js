const User = require('../models/user.js')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')


exports.login = async (req,res)=>{
    const {email , password} = req.body
}
exports.signup = async (req,res)=>{
    const {email , password} = req.body
    console.log(req.body)
    try {
        const exists = await User.find({
            email : email
        })
        if (exists.length > 0){
            return res.status(409).json({message: "user already exists"})
        }
        const hashedPassword  = await bcrypt.hash(password,10)
        const user = await User.create({
            email,password: hashedPassword
        })
        console.log('user registered successfully')
        res.status(200).json({message: "user registered"})
    } catch (error) {
        console.log('registration failed')
        return res.status(500).json({message : "failded to register a user",error :error.message})
    }
}