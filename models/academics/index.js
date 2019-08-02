let studentDef = require('./student-admin');
let teacherDef = require('./teacher-admin');
let courseDef = require('./course-admin');
let courseInstanceDef = require('./class-admin');
let studentClassSchemaDef = require('./student_class-admin');
let classEnrollDef = require('./classenroll-admin');
let termsDef = require('./terms-admin');

const schemas = {
  ClassEnroll: classEnrollDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef,
  Course: courseDef,
  Student: studentDef,
  Teacher: teacherDef,
  Terms: termsDef,
};

const config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss",
  fileServer: {
    uploadUrl: '/api/files/upload',
    downloadUrl: '/api/files/download'
  }
}

const authz = {
  "module-authz": {"LoginUser": 'R', "Anyone": ""},
}

module.exports = {schemas, config, authz};
