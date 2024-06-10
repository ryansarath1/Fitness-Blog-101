
const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    workout: [Workout]
  }

  type Workout {
    _id: ID!
    workoutName: String
    Sets: String
    Reps: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addWorkout(
      workoutName: String!,
      Sets: String!, 
      Reps: String!, 
    ): User

    addUser(
      username: String!, 
      email: String!, 
      password: String!
    ): Auth

    login(
      email: String!, 
      password: String!
    ): Auth
  }

`;

module.exports = typeDefs;
