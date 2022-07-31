const schema = require('./class');

var brief = "title | course[Program] |  season startTime endTime | hot ";
var detail = "title | description | course[Program] teacher[Instructor] | price priceOptions | season startTime endTime duration | dayOfWeek timeSlot | hot enrollTerm";
var creat = "title course[Program] teacher[Instructor] price priceOptions  season startTime endTime duration dayOfWeek timeSlot hot  description enrollTerm";
var edit = "title course[Program] teacher[Instructor] price priceOptions  season startTime endTime duration dayOfWeek timeSlot hot description enrollTerm";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];


//Export model
module.exports = {
  schema,
  views,
  mraUI: {
    listWidgets: {
      general: {
        views: ['table', 'list', 'grid'],
      },
      select: {
        views: ['list'],
      },
      sub: {
        views: ['list'],
      },
      calendar: {
        views: ['calendar'],
      },
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
    listToDetail: 'link', // link, click, none
    detailRefName: {
      'StudentClass': 'Class Students',
      "ClassEnroll": "Class Enrollments"
    },
    defaultListSort: { startTime: 'desc' } 
  },

  associations: {
    'StudentClass': ['student',  'Export Students'],// further show the student (object refer field) for this reference list
    'ClassEnroll':  ['student', 'Export Enrollments'],// further show the student (object refer field) for this reference list
  },
  mraBE: {
    valueSearchFields: ['season'],
  },
};
