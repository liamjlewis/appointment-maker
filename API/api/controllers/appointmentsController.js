'use strict';


var mongoose = require('mongoose'),
  Appointment = mongoose.model('Appointment');

exports.show_appointments = function(req, res) {
  Appointment.find({}, function(err, appointments) {
    if (err)
      res.send(err);
    res.json(appointments);
  });
};


exports.add_appointment = function(req, res) {
    Appointment.find({ bookingTime: req.body.bookingTime}, function (err, docs) { //check if there are any bookings at the same time

      if(docs.length === 0){
        var new_appointment = new Appointment(req.body);
        new_appointment.save(function(err, appointment) {
          if (err)
            res.send(err);
          res.json(appointment);
        });
      }else{
        res.send('This slot was already registered');
      }

    });
};
