import { Link } from "react-router-dom";  

const WorkoutDetails = ({ workout }) => {  
    return (  
        <>  
            <div className="detail">
                <h1>{workout.name}</h1>
                <h4>{workout.load}</h4>
                <h5>{workout.reps}</h5>
            </div> 
        </>  
    );  
}  

export default WorkoutDetails;  