var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Table = require('./api/models/leagueTableModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://34.220.107.232/Tabledb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/leagueTableRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('MSC Global Tables RESTful API server started on: ' + port);
