var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trashRouter = require('./routes/trash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Getting the correct MongoDB connection string for the right environment
let environment = process.argv[2];
let connectionString;
if (environment ===  "local") {
  connectionString = "mongodb://localhost:27017/restApiDB";
} else if (environment === "prod") {
  connectionString = "mongodb+srv://dumpsterteam:b5aP7iDFZWeEhc9J@dumpster-byflt.mongodb.net/test?retryWrites=true&w=majority";
}

// Connect to Mongoose and set connection variable
mongoose.connect(connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trash', trashRouter);

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