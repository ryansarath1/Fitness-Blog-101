import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
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
mutation login($email: String!, $password: String!) {
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
// export const CREATE_WORKOUT = gql`
//   mutation AddWorkout($workoutName: String!, $Sets: String!, $Reps: String!, $complete: Boolean!, $user: ID!) }
//   addWorkout(workoutName: $workoutName, Sets: $Sets, Reps: $Reps, Complete: Complete, user: $user) {
//     Complete
//     Reps
//     Sets
//     _id
//     user
//     workoutName
//   }
// }`