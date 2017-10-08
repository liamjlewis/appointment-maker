'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the viewer.',
    maxlength: 50
  },
  bookingTime: {
    type: Number,
    required: 'A start time and date are required.',
    min: [540, 'Before opening hours.'],
    max: [1050, 'After opening hours.'],
    validate: {
      validator: function(v) {
        return !(v >= 720 && v < 780);
      },
      message: '{VALUE} is within the lunch hour.'
    }
  },
  bookingDate: {
    type: Date,
    required: 'ISO date is required'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);