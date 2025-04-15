import { useState, useEffect } from "react";  
import WorkoutDetails from "./workoutDetails"; 
import { UseWorkoutContext } from "../hooks/useWorkoutContext";
const Home = () => {  
    const [error, setError] = useState(null);  
    const {workouts ,dispatch} = UseWorkoutContext()
    useEffect(() => {  
        const fetchData = async () => {  
            try {  
                const response = await fetch(`http://localhost:4000/api/workouts`);  
                const res = await response.json()
                if(!response.ok){
                  setError(response.error.message)
                }
                console.log(res)
                dispatch({type: "getAll" ,payload: res})
            } catch (error) {  
                console.error("Error fetching data:", error);  
                
            } 
        };  
    
        fetchData(); 
    }, []); 

    return (   
        <main>  
            <h1>Workouts</h1>  
            {error && <div className="error">{error}</div>}
            <div className="workouts">  
            {workouts && workouts.map(workout => (
                <WorkoutDetails workout={workout} key={workout._id} />
            ))}
            </div>  
        </main>  
    );  
}  

export default Home;  