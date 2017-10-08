'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/appointmentsController');

  // todoList Routes
  app.route('/appointment')
    .get(todoList.show_appointments)
    .post(todoList.add_appointment);

};