require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const workoutRouter = require('./routes/workoutRoutes')
const mongoose = require('mongoose')


app.use(express.json())
app.use('/api/workouts/',workoutRouter)


app.listen(port,()=>{
    console.log(`your app is running  on port ${port}`)
})