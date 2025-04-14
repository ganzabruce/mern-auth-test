import { useState, useEffect } from "react";  
import WorkoutDetails from "./workoutDetails"; // Ensure correct capitalization  
import { Link } from "react-router-dom";  

const Home = () => {  
    const [workouts, setWorkouts] = useState([]); // Initialize workouts as an empty array  
    const [error, setError] = useState(null);  

    useEffect(() => {  
        async function fetchWorkouts(){  
            try {  
                const response = await fetch('http://localhost:4000/api/workouts/');  
                if (!response.ok) {  
                    throw new Error('Failed to fetch workouts');  
                }  
                const json = await response.json();  
                setWorkouts(json);  
            } catch (error) {  
                setError(error.message);  
                console.log(error.message);  
            }  
        }  
        fetchWorkouts();  
    }, []);  

    return (   
        <main>  
            <h1>Workouts</h1>  
            {error && <div className="error">{error}</div>} {/* Optional: Add a class for styling */}  
            <div className="workouts">  
                {workouts.length > 0 ? ( // Check if workouts array is not empty  
                    workouts.map(workout => (  
                        <Link key={workout._id} to={`/workouts/${workout._id}`} className="workout-link"> {/* Link to workout details */}  
                            <WorkoutDetails workouts={[workout]} /> {/* Pass the single workout object */}  
                        </Link>  
                    ))  
                ) : (  
                    <div>No workouts found</div>  
                )}  
            </div>  
        </main>  
    );  
}  

export default Home;  