const MongoStore = require('connect-mongo')
const Workout = require('../models/workout')
const { default: mongoose } = require('mongoose')
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
exports.getAll = async (req,res)=>{
    try {
        const workouts = await Workout.find({})
        if(workouts.length === 0){
            return res.status(200).json({message: "no workouts found"})
        }
        console.log(workouts)
        res.status(200).json(workouts)
    } catch (error) {
        console.log('internal server error ', error.stack)
        return res.status(500).json({error : error.stack})
    }
}

exports.getOne = async (req,res)=>{
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: "no such workout"})
        }
        const workout = await Workout.find({_id:id})
        res.status(200).json({message: "retrieved workouts" , workout})
    } catch (error) {
        console.log('failed to retrieve user',error.message)   
    }
}
exports.deleteOne = async(req,res)=>{
    const {id } = req.params.id
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {  
            return res.status(404).json({ message: "No such workout" });  
        }  
        const exists = await Workout.find({
            _id:id
        })
        if(!exists){
            return res.json({message:"that typa workout doesn't exist"})
        }
        const workout = await Workout.findOneAndDelete({_id : id})
        res.status(200).json({message: "workout deleted successfully"})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}


exports.updateOne = async (req, res) => {  
    const { id } = req.params; 
    const { name, load, reps } = req.body;  

    try {
        const workout = await Workout.findOneAndUpdate(  
            { _id: id },  
            { name, load, reps },  
            { new: true } 
        );  
        res.status(200).json({ message: "Workout updated successfully", workout });  
    } catch (error) {  
        return res.status(500).json({ message: error.message });  
    }  
};  