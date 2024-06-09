import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || {};

  console.log(userData);
  return (
    <div className="profile-page">
      <h2>welcome {userData.username}</h2>
      {/* USer should be able to see a button to create a workout, workout history,  */}
      <button><Link to='/add'>Create Workout</Link></button>

      {/* create a div that will display the name of the workout, the reps, the sets,and if it was completed */}
      {userData.workouts?.map((workout, i) => (
        <div key={i}>
          <h4>{workout.workoutName}</h4>
          <p>Set: {workout.Sets}</p>
          <p>Reps: {workout.Reps}</p>
          {/* <p>Completed: {workout.Complete}</p> */}
        </div>
      ))}
    </div>
  );
}
