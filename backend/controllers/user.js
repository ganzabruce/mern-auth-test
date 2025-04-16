const User = require('../models/user.js')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const validator  = require('validator')

const createToken = (_id) =>{
    return jwt.sign({_id:_id},"hello",{expiresIn: '3d'})
}
exports.login = async (req,res)=>{
    const {email , password} = req.body
    
    try {
        if(!email || !password){
            throw Error('all fields must be filled')
        }
        const user = await User.findOne({email: email})
        if(!user){
            throw Error ("email doesn't exist")
        }
        const isValid = await bcrypt.compare(password,user.password)
        if(!isValid){
            throw Error('invalid credentials')
        }
        const token = createToken(user._id)
        res.status(200).json({email,token})
        console.log('logged in successfully')
    } catch (error) {
        res.status(500).json({error:error.message})
    }



}
exports.signup = async (req,res)=>{
    const {email , password} = req.body
    console.log(req.body)
    try {
        if(!email || !password){
            throw Error('all fields must be filled')
        }
        if(!validator.isEmail(email)){
            throw Error('invalid email')
        }
        if(!validator.isStrongPassword(password)){
            throw Error('password is not strong enough')
        }
        const exists = await User.find({
            email : email
        })
        if (exists.length > 0){
            throw Error("user already exists")
        }
        const hashedPassword  = await bcrypt.hash(password,10)
        const user = await User.create({
            email,password: hashedPassword
        }) 
        const token  = createToken(user._id)
        console.log('user registered successfully')
        res.status(200).json({email,token})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}