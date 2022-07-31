const schema = require('./classenroll');

var brief = 'student class price status createdAt[Created Time]';
var detail = 'student class price status notes createdAt[Created Time]';
var create = 'student class price notes';
var edit = 'student class price status notes';
var textSearch = 'student class';
var index = 'student'; //let's temporarily put any field here since this schema is not referred.

var views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  name: 'Class Enrollments',
  // patch: ['muser_id'], //extra fields to patch to schema
  // owner: { enable: true, type: 'user' },
  owner: { enable: true, type: 'user', field: 'member' },

  api: 'LCR',
  mraUI: {
    listWidgets: {
      general: {
        views: ['table'],
      },
      select: {
        views: ['list'],
      },
      sub: {
        views: ['list'],
      },
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },

    disableListSearch: true, // not show the search bar
    listActionButtons: ['', ''],
    listTitle: 'Your Class Enrollments',
    defaultListSort: { createdAt: 'desc' },

    detailActionButtons: ['', '', ''],
    detailRefName: {
      // if being referenced, what name to show
      StudentClass: 'Attended Classes',
      ClassEnroll: 'Enrolled Classes',
    },

    detailTitle: 'Enrollment',
    detailActions: [['Make Payment', '/actions/pay']],

    selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
  },
};
