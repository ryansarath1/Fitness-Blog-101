import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation AddWorkout($workoutName: String!, $sets: String!, $reps: String!, $complete: Boolean!, $user: ID!) {
  addWorkout(workoutName: $workoutName, Sets: $sets, Reps: $reps, Complete: $complete, user: $user) {
    Complete
    Reps
    Sets
    _id
    user
    workoutName
  }
}`;
