let studentDef = require('./student-public');
let teacherDef = require('./teacher-public');
let courseDef = require('./course-public');
let courseInstanceDef = require('./class-public');
let studentClassSchemaDef = require('./student_class-public')
let classEnrollDef = require('./classenroll-public')
let payment = require('./payment-public');
let termsDef = require('./terms-public')

const schemas = {
  Student: studentDef,
  Teacher: teacherDef,
  Course: courseDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef,
  ClassEnroll: classEnrollDef,
  Terms: termsDef,
  Payment: payment,
};

const config = {
  dateFormat: 'MM-DD-YYYY',
  timeFormat: 'hh:mm:ss',
  fileServer: {
    uploadUrl: '/api/files/upload',
    downloadUrl: '/api/files/download'
  }
}

const authz = {
  'module-authz': {'LoginUser': 'R', 'Anyone': ''},
  'Class': {'LoginUser': '', 'Anyone': 'R'},
  'Teacher': {'LoginUser': '', 'Anyone': 'R'},
  'Course': {'LoginUser': '', 'Anyone': 'R'},
  'Student': {'LoginUser': {'others': '', 'own': 'CRUD'}, 'Anyone': ''},
  'ClassEnroll': {'LoginUser': {'others': '', 'own': 'CRUD'}, 'Anyone': ''},
}

const DB_CONFIG = {
  APP_NAME: process.env.APP_NAME,
  MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = {schemas, config, authz, DB_CONFIG};
