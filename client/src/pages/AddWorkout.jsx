import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_WORKOUT } from "../utils/mutations";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddWorkoutForm() {
  const [formState, setFormState] = useState({
    workoutName: "",
    Sets: 0,
    Reps: 0,
  });

  const [addWorkout] = useMutation(CREATE_WORKOUT);

  // const history = useHistory(); // Initialize useHistory
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

     await addWorkout({
        variables: { workoutData: {
           workoutName: formState.workoutName, 
           Sets: parseInt(formState.Sets), 
           Reps: parseInt(formState.Reps) 
          } },
        });
        
        document.location.replace('/profile')

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Add a New Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="workoutname">Workout Name:</label>
          <input
            className="form-input"
            type="text"
            name="workoutName"
            id="workoutname"
            value={formState.workoutName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sets">Sets:</label>
          <input
            className="form-input"
            type="number"
            name="Sets"
            id="sets"
            value={formState.Sets}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reps">Reps:</label>
          <input
            className="form-input"
            type="number"
            name="Reps"
            id="reps"
            value={formState.Reps}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block btn-info">
          Add Workout
        </button>

        
        <button className="btn btn-block btn-info">
          <Link
            to="/profile"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Back to Profile
          </Link>
        </button>
      </form>
    </div>
  );
}
