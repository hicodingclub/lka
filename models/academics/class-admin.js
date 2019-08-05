const schema = require('./class');

var brief = "title | course[Program] teacher[Instructor] hot | startTime endTime dayOfWeek timeSlot";
var detail = "title | description | course[Program] teacher[Instructor] price | startTime endTime duration | dayOfWeek timeSlot | notes | hot enrollTerm";
var creat = "title course[Program] description teacher[Instructor] price startTime endTime duration dayOfWeek timeSlot notes hot enrollTerm";
var edit = "title course[Program] description teacher[Instructor] price startTime endTime duration dayOfWeek timeSlot notes hot enrollTerm";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];


//Export model
module.exports = {
  schema,
  views,
  mraUI: {
    listType: 'table', // table, list, or grid
    listToDetail: 'link', // link, click, none
    detailRefName: {
      'StudentClass': 'Class Students',
      "ClassEnroll": "Class Enrollments"
    }
  },

  associations: {
    'StudentClass': ['student',  'Export Students'],// further show the student (object refer field) for this reference list
    'ClassEnroll':  ['student', 'Export Enrollments'],// further show the student (object refer field) for this reference list
  }
};
