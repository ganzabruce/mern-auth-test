const Workout = require('../models/workout')
exports.createOne = async(req,res)=>{
    const {name ,load , reps} = req.body
    try {
        const workout = await Workout.create({
            name,load,reps
        })
        console.log('workout created')
        res.status(200).json({message: workout})
    } catch (error) {
        console.log(error.stack)
    }
}
exports.getAll = async(req,res)=>{
    try {
        const workouts = await Workout.find()
        console.log('all workouts fetched')
        res.status(200).json({workouts})
    } catch (error) {
        console.log('internal server error ', error.stack)
    }
}
exports.deleteOne = async(req,res)=>{
    const {id } = req.params
    try {
        const workout = await Workout.findOneAndDelete({_id : id})
        console.log('workout deleted')
        res.status(200).json({message: "workout deleted successfully"})
    } catch (error) {
        res.json({error})
    }
}
exports.updateOne  = async(req,res)=>{
    const {id} = req.params
    try {
        const workout = await Workout.findAndUpdate({_id: id},{
            ...req.body
        })
    } catch (error) {
        
    }
}