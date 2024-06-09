const { User, Thought, Workout } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user){
        // once the model is fixed to add the workout to rhe user you will need to populate the workout arrau
        const user =  await User.findOne({_id: context.user._id}).populate('workouts')
        return user
      }
      throw AuthenticationError
    }
    // users: async () => {
    //   return User.find();
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // addThought: async (parent, { thoughtText, thoughtAuthor }, context) => {
    //   if(context.user){

    //     const thought = await Thought.create({ thoughtText, thoughtAuthor });
  
    //     const user = await User.findOneAndUpdate(
    //       { username: thoughtAuthor },
    //       { $addToSet: { thoughts: thought._id } }
    //     );
  
    //     return user;
    //   }
    //   throw AuthenticationError
    // },
    addWorkout: async (parent, args, context) => {
      if(context.user){
        // create the workout then add the workout id to the users account, make sure this returns the user 
      const newWorkout = await Workout.create(args);

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { workouts: newWorkout._id } }, 
          {new: true}
        );

      return user;
      }
      throw AuthenticationError
    },

    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // }
  }
};

module.exports = resolvers;
