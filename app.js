const express = require('express'); // require express
const path = require('path'); // provides the utility to with files and directory paths
const createError = require('http-errors'); // creates HTTP errors
const cookieParser = require('cookie-parser'); // enables signed cookie support
const logger = require('morgan');

// connect to express
const app = express();

// connect to the routes folder
const homeRouter = require('./routes/home'); // gets the home page
const contentRouter = require('./routes/content'); // gets the content page

// setup view engine to use hbs in the views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // tell express where our public files are which are our css, images, etc

// import mongoose and connect to mongodb here


// tell express to use these route
app.use('/', homeRouter);
app.use('/content', contentRouter);

// catch 404 and forward to error handler
//GET /public/stylesheets/content.css 404 17.006 ms - 2397
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // export the app so routes can access it
