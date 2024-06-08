import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser() {
    createUser() {
      _id
      
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser() {
    login() {
      _id
      
    }
  }
`;
export const CREATE_WORKOUT = gql`
  mutation AddWorkout($workoutName: String!, $Sets: String!, $Reps: String!, $complete: Boolean!, $user: ID!) }
  addWorkout(workoutName: $workoutName, Sets: $Sets, Reps: $Reps, Complete: Complete, user: $user) {
    Complete
    Reps
    Sets
    _id
    user
    workoutName
  }
}`