const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema (
    {
    workoutName: {
        type: String,
        required: true
    },
    Sets: {
        type: Number,
        required: false
    },
    Reps: {
      type: Number,
      required: false
  },
    Complete: {
        type: Boolean,
        default: false
    }
  
});

const Workout = model ('Workout', workoutSchema);

module.exports = Workout;