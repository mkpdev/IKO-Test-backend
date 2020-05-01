// All env variables need to be loaded first
require('dotenv').config();


var express = require('express');
var cors = require('cors')
var app = express(cors());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require Products routes
require('./app/routes/product.routes.js')(app);

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.listen(3000, () => {
  console.log('Node server is running..');
});