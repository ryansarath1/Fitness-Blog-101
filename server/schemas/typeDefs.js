
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Workout {
    _id: ID
    workoutName: String!
    sets: String!
    reps: String!
    complete: Boolean!
    user: ID!
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addWorkout(
      workoutName: String!, 
      sets: String!, 
      reps: String!, 
      complete: Boolean!, 
      user: ID!
    ): Workout

    addProfile(
      username: String!, 
      email: String!, 
      password: String!
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

    addThought(
      thoughtText: String!, 
      thoughtAuthor: String!
    ): Thought

    addComment(
      thoughtId: ID!, 
      commentText: String!, 
      commentAuthor: String!
    ): Thought

    removeComment(commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
