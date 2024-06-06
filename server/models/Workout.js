const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema (
    {
    workoutName: {
        type: String,
        required: true
    },
    Sets: {
        type: String,
        required: false
    },
    Reps: {
      type: String,
      required: false
  },
    Complete: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
  
});

const Workout = model ('Workout', workoutSchema);

module.exports = Workout;