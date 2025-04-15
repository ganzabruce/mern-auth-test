import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";


export const UseWorkoutContext = ()=>{
    const context = useContext(WorkoutContext) 
    if(!context){
        throw Error('no context provided')
    }
    return context
}
