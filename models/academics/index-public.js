let studentDef = require('./student-public');
let teacherDef = require('./teacher-public');
let courseDef = require('./course-public');
let courseInstanceDef = require('./class-public');
let studentClassSchemaDef = require('./student_class-public')
let classEnrollDef = require('./classenroll-public')
let termsDef = require('./terms-public')

const schemas = {
  Student: studentDef,
  Teacher: teacherDef,
  Course: courseDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef,
  ClassEnroll: classEnrollDef,
  Terms: termsDef,
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
  'Student': {'LoginUser': {'others': '', 'own': 'CRUD'}, 'Anyone': ''},
  'ClassEnroll': {'LoginUser': {'others': '', 'own': 'CRUD'}, 'Anyone': ''},
}

module.exports = {schemas, config, authz};
