import { useContext } from "react";
import { workoutContext } from "../context/workoutsContext";


export const UseWorkoutContext = () =>{
    const context = useContext(workoutContext)
    if (context){
        throw Error('no context proveided')
    }
    return context
    
}