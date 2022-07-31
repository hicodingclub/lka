let studentDef = require('./student-admin');
let teacherDef = require('./teacher-admin');
let courseDef = require('./course-admin');
let courseInstanceDef = require('./class-admin');
let studentClassSchemaDef = require('./student_class-admin');
let classEnrollDef = require('./classenroll-admin');
let payment = require('./payment-admin');
let termsDef = require('./terms-admin');
let memberDef = require("./member-admin");

const schemas = {
  ClassEnroll: classEnrollDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef,
  Course: courseDef,
  Student: studentDef,
  Teacher: teacherDef,
  Terms: termsDef,
  Payment: payment,
  Member: memberDef,
};

const config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss",
  fileServer: {
    uploadUrl: '/api/files/upload',
    downloadUrl: '/api/files/download'
  }
}

const DB_CONFIG = {
  APP_NAME: process.env.APP_NAME,
  MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

const authz = {
  "module-authz": {"LoginUser": 'R', "Anyone": ""},
}

module.exports = {schemas, config, authz, DB_CONFIG};
