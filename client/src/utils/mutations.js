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
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation AddWorkout($workoutName: String!, $sets: String!, $reps: String!, $complete: Boolean!, $user: ID!) }
  addWorkout(workoutName: $workoutName, Sets: $sets, Reps: $reps, Complete: $complete, user: $user) {
    Complete
    Reps
    Sets
    _id
    user
    workoutName
  }
}`;
