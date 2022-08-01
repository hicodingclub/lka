const schema = require('./classenroll');

var brief = 'student class price status member createdAt[Created At]';
var detail =
  'student class price status notes createdAt[Created At] updatedAt[Updated At] member';
var create = 'student class price notes member';
var edit = 'student class status price notes member';
var textSearch = 'student class';
var index = 'student'; //let's temporarily put any field here since this schema is not referred.
var association = "student class status";

var views = [brief, detail, create, edit, textSearch, index, association];

//Export model
module.exports = {
  schema,
  views,
  name: 'Class Enrollments',
  // patch: ['muser_id'], //extra fields to patch to schema
  api: 'LCRUDEM', //E - export
  mraUI: {
    listWidgets: {
      general: {
        views: ['table', 'list', 'grid'],
      },
      select: {
        views: ['list'],
      },
      sub: {
        views: ['table'],
      },
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
    defaultListSort: { createdAt: 'desc' },
  },
};
