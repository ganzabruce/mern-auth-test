const express = require('express')
const userRouter = express.Router()
const userControllers = require('../controllers/user')


userRouter.post('/login',userControllers.login)
userRouter.post('/signup',userControllers.signup)



module.exports = userRouter