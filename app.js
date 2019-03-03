const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');

const meanRestExpress = require('mean-rest-express');
//for auth client
const authApp = require('mdds-express-auth-app');
const authFuncs = authApp.authFuncs;
//for auth server
const authServer = require('mdds-mongoose-express-auth-server');
const defaultUserDef = authServer.authUserDef;
const authRouter = authServer.GetDefaultAuthnRouter(defaultUserDef);
const usersRouter = meanRestExpress.RestRouter(defaultUserDef, 'Users', authFuncs);
//for lka models
const lkaDbDefinition = require('./models/index');
const lkaRouter = meanRestExpress.RestRouter(lkaDbDefinition, 'Academics', authFuncs);
//Authorization App Client. Call it after all meanRestExpress resources are generated.
authApp.run('local', 'app-key', 'app-secrete');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/academics', lkaRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

//for file upload
var multer = require('multer');
var upload = multer({ dest: '/tmp/'});
var fs = require('fs');

//File input field name is simply 'file'
app.post('/api/images', upload.single('file'), function(req, res) {
    var file = __dirname + '/' + req.file.filename;
    fs.rename(req.file.path, file, function(err) {
     if (err) {
       console.log(err);
       res.send(500);
     } else {
       res.json({
         message: 'File uploaded successfully',
         filename: req.file.filename
       });
     }
    });
});

app.get(/.*/, function(req, res, next) {
  if (req.accepts('html')) {
	  return res.sendFile(path.join(__dirname, './public/index.html'));
  } else {
    return next();
  }
});

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
