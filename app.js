var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// let compression = require('compression');
// let helmet = require('helmet');
var indexRouter = require('./src/routes/index');
var apiRouter = require('./src/routes/api');
const enforce = require('express-sslify');

var app = express();

app.set('views', path.join(__dirname, "src", 'views'));
app.set('view engine', 'twig');

// app.use(compression());
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: [
//         "'self'",
//         "'unsafe-inline'", // To allow inline scripts
//         "https://cdn.jsdelivr.net", // To allow scripts from the external CDN
//       ],
//       // styleSrc: ["'self'", "https:", "'unsafe-inline'"],
//       // imgSrc: ["'self'", "data:", "https:"],
//       // connectSrc: ["'self'", "https:"],
//       // fontSrc: ["'self'", "https:", "data:"],
//       // objectSrc: ["'none'"],
//       // mediaSrc: ["'self'", "https:", "data:"],
//       // frameSrc: ["'self'", "https:"],
//     },
//   },
// }));

// if (app.get("env") !== "development") {
//   app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
