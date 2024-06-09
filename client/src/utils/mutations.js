import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Uncomment and correct the below mutation if needed
// export const CREATE_WORKOUT = gql`
//   mutation AddWorkout($workoutName: String!, $sets: String!, $reps: String!, $complete: Boolean!, $user: ID!) {
//     addWorkout(workoutName: $workoutName, sets: $sets, reps: $reps, complete: $complete, user: $user) {
//       complete
//       reps
//       sets
//       _id
//       user
//       workoutName
//     }
//   }
// `;
