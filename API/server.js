var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Appointment = require('./api/models/appointmentModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/appointments'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/appointmentsRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
