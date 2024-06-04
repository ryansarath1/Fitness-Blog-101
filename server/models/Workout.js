const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema (
    {
    workout_name: {
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
    complete: {
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