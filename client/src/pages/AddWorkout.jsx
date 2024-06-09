// import React from 'react'
// import { useMutation } from '@apollo/client'
// import { CREATE_WORKOUT } from '../utils/mutations'

// export default function AddWorkout() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import { useState } from 'react';
import { Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    workout: '',
    sets: '',
    reps: '',
  });
  const [AddWorkout, {error}] = useMutation(CREATE_WORKOUT);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await AddWorkout({
        variables: { ...formState },
      });

      Auth.login(data.AddWorkout.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Enter Todays Progress</h4>
          <div className="card-body">
            {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Workout"
                  name="workoutName"
                  type="text"
                  value={formState.workoutName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Sets"
                  name="Sets"
                  type="text"
                  value={formState.Sets}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Reps"
                  name="Reps"
                  type="text"
                  value={formState.Reps}
                  onChange={handleChange}
                />
                {/* <input
                  className="form-input"
                  placeholder="Complete?"
                  name="complete"
                  type="true"
                  value={formState.email}
                  onChange={handleChange}
                /> */}
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            {/* )} */}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
          {/* <Link to="/login" className="btn btn-block btn-info">already have an account click here.</Link> */}
      </div>
    </main>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { CREATE_WORKOUT } from "../utils/mutations";
// export default function AddWorkout() {
//   const [formState, setFormState] = useState({
//     workoutname: "",
//     sets: "",
//     reps: "",
//     complete: true
//   });
//   const [createWorkout, { error }] = useMutation(CREATE_WORKOUT);
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await createWorkout({
//         variables: { ...formState },
//       });
//       // Reset form state after successful submission
//       setFormState({
//         workoutname: "",
//         sets: "",
//         reps: "",
//         complete: false
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   return (
//     <div>
//       <h2>Add a New Workout</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Workout Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formState.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="sets">Sets:</label>
//           <input
//             type="number"
//             name="sets"
//             id="sets"
//             value={formState.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="reps">Reps:</label>
//           <input
//             type="number"
//             name="reps"
//             id="reps"
//             value={formState.date}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="Complete">Complete:</label>
//           <input
//             type="checkbox"
//             name="Complete"
//             id="Complete"
//             value={formState.date}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Add Workout</button>
//       </form>
//     </div>
//   );
// }