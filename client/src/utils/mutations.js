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
export const CREATE_WORKOUT = gql`
mutation addWorkout($workoutData: WorkoutInput!) {
  addWorkout(workoutData: $workoutData) {
    _id
    username
    email
    workouts {
      _id
    }
  }
}
`;
