require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const workoutRouter = require('./routes/workoutRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)
.then(()=>{
   console.log('connected and running')
   app.listen(port,()=>{
      console.log(`your app is running  on port ${port}`)
   })
})
.catch((err)=>{
   console.log('connection error ', err)
})
app.use('/api/workouts',workoutRouter)