const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const logger = require('./lib/logger');

const db = require('./db');

const meanRestExpress = require('mean-rest-express');
//for auth client
const authApp = require('mdds-express-auth-app');
const authFuncs = authApp.authFuncs;
//for auth server
const authServer = require('mdds-mongoose-express-auth-server');
const defaultUserDef = authServer.authUserDef;
const option = {authz: 'group'}; //user group based authorization
const authRouter = authServer.GetDefaultAuthnRouter(defaultUserDef, option);
const usersRouter = meanRestExpress.RestRouter(defaultUserDef, 'Users', authFuncs);

// this is special: we only get the router, but will only use it internally so authApp can pass managed access modules to it.
// this use no external routing path defined for it because we don't manage public access in public facing app.
const authzAccessRouter = authServer.GetDefaultAccessManageRouter('Internal-Access', authFuncs); //manage public access module

//for academics models
const academicsDbDefinition = require('./models/academics/index-public');
const academicsRouter = meanRestExpress.RestRouter(academicsDbDefinition, 'Academics', authFuncs);

//for public models
const publicInfoDbDefinition = require('./models/publicInfo/index-public');
const publicInfoRouter = meanRestExpress.RestRouter(publicInfoDbDefinition, 'PublicInfo', authFuncs);

//for pipeline models
const pipelineDef = require('./models/pipeline/index');
const pipelineRouter = meanRestExpress.RestRouter(pipelineDef, 'Pipeline', authFuncs);

//file server
const fileSvr = require('mdds-mongoose-express-file-server');
const defaultAdminSysDef = fileSvr.sampleAdminSysDef;
const fileSOption = {
  storage: 'fs',
  directory: path.join(__dirname, 'storage', 'uploads'),
  linkRoot: '/api/files', //link = linkRoot + '/download' - download needs to be enabled.
}
const dbSOption = {
  storage: 'db',
  linkRoot: '/api/files',   //link = linkRoot + '/download' - download needs to be enabled.
}
const fileSvrRouter = fileSvr.ExpressRouter(defaultAdminSysDef, 'Files', authFuncs, fileSOption);

//Authorization App Client. Call it after all meanRestExpress resources are generated.
const publicModules = ['Users', 'Academics', 'PublicInfo', 'Pipeline', 'Files']; //the modules that for public access
//pass in authzAccessRouter so authApp can upload the managed role moduoes to authzAccessRouter
authApp.run('local', 'app-key', 'app-secrete', authzAccessRouter, {'accessModules': publicModules});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined', {stream: logger.stream}));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/academics', academicsRouter);
app.use('/api/publicinfo', publicInfoRouter);
app.use('/api/pipeline', pipelineRouter);
app.use('/api/files', fileSvrRouter);
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

  const allowedErrCode = [400, 401, 403, 404];
  if (!allowedErrCode.includes(err.status)) {
    logger.error(err)
  }

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
