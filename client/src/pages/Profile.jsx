import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";



export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME)
  if (loading) return <p>Loading...</p>;
  const userData = data?.me || {};

  console.log(userData);
  return (
    
    <div className="profile-page">
      <h1>welcome {userData.username}</h1>
      <h4>Let see your workout routine</h4>
      {/* USer should be able to see a button to create a workout, workout history,  */}
      <Link to="/add" className="btn btn-block btn-info">Create Workout</Link>
<div style={{padding: '3%',}}>
  {/* create a div that will display the name of the workout, the reps, the sets,and if it was completed */}
      {userData.workouts?.map((workout, i) => (
        <div key={i} style={{backgroundColor: "white",  padding: '2%', marginBottom: '5px'}}>
          <h4 style={{color: "black"}}>{workout.workoutName}</h4>
          <p style={{color: "black"}}>Set: {workout.Sets}</p>
          <p style={{color: "black"}}>Reps: {workout.Reps}</p>
        </div>
      ))}
</div>
      
    </div>
  );
}
