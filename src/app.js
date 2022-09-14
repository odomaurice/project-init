require('dotenv').config() 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var httpLogger = require('morgan');
var logger  = require('./health/logger/index') 
var hbs = require('handlebars') 
var createDatabaseConnection = require('./utils/Database/connect') 


var { createRoutes } = require('./routes/index.route') 



logger.info(' Application Up and Running ')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Create database connection 
(async ()=>{ createDatabaseConnection() })()


// All Routes 
createRoutes(app) 

require('./routes/user/user.route')(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
