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
const authAccountDef = authServer.authAccountDef;
const option = {authz: 'role'}; //admin role based authorization
const authRouter = authServer.GetDefaultAuthnRouter(authAccountDef, option);

const authzAccessRouter = authServer.GetDefaultAccessManageRouter("Access", authFuncs); //manage public access module
const authzRolesRouter = authServer.GetDefaultRolesManageRouter("Roles", authFuncs); //manage admin roles module

const defaultUserDef = authServer.authUserDef;
const usersRouter = meanRestExpress.RestRouter(defaultUserDef, 'Users', authFuncs);

//for academics models
const academicsDbDefinition = require('./models/academics/index');
const academicsRouter = meanRestExpress.RestRouter(academicsDbDefinition, 'Academics', authFuncs);

//for public models
const publicInfoDbDefinition = require('./models/publicInfo/index');
const publicInfoRouter = meanRestExpress.RestRouter(publicInfoDbDefinition, 'PublicInfo', authFuncs);

//file server
const fileSvr = require('mdds-mongoose-express-file-server');
const defaultAdminSysDef = fileSvr.sampleAdminSysDef;
const fileSOption = {
  storage: "fs",
  directory: path.join(__dirname, 'public-admin', 'storage', 'uploads'),
  linkRoot: "/storage/uploads", //directly download from uploads dir as static file
}
const dbSOption = {
  storage: 'db',
  linkRoot: '/api/files',   //link = linkRoot + "/download" - download needs to be enabled.
}
const fileSvrRouter = fileSvr.ExpressRouter(defaultAdminSysDef, 'Files', authFuncs, dbSOption);

//Authorization App Client. Call it after all meanRestExpress resources are generated.
const manageModule = ['Users', 'Academics', 'PublicInfo', 'Access', 'Roles', 'Files']; //the modules that manages
authApp.run('local', 'app-key', 'app-secrete', {'roleModules': manageModule});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public-admin')));

app.use('/api/academics', academicsRouter);
app.use('/api/publicinfo', publicInfoRouter);
app.use('/api/files', fileSvrRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', authzRolesRouter);
app.use('/api/access', authzAccessRouter);

app.use('/api/auth', authRouter);

app.get(/.*/, function(req, res, next) {
  if (req.accepts('html')) {
	  return res.sendFile(path.join(__dirname, './public-admin/index.html'));
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
