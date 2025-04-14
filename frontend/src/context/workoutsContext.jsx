import { createContext, useReducer } from "react";
export const workoutContext  = createContext()
const workoutReducer = (state,action)=>{
    switch(action.type){
        case 'getAll':
            return {
                workouts: action.payload
            }
        default :
            return{
                workouts: state
            }
    }
}
export const WorkoutContextProvider = ({children})=>{
    const [state , dispatch ] = useReducer(workoutReducer,{
        workouts: null
    })
    return(
    <workoutContext.Provider value={{...state,dispatch}}>
        {children}
    </workoutContext.Provider>
    )
}