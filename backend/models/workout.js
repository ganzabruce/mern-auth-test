const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutsSchema = new Schema({
    name :{
        type:String ,
        required:true
    },load: {
        type:String ,
        required: true
    },reps:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Workout = mongoose.model('Workout',workoutsSchema)
module.exports = Workout