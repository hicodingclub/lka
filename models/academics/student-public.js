const schema = require('./student');

const brief = "first_name last_name email phoneNumber grade";
const detail = "first_name last_name | date_of_birth grade | email phoneNumber | school | GuardianOneName GuardianOnePhone GuardianOneEmail | GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const create = "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const edit = "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: 'LCRUD',
  patch: ['muser_id'], //extra fields to patch to schema
  owner: {enable: true, type: 'user'},
  listWidgets: ['sel'], //home - home page list view, s: select view for pipeline/composite, d: slides list view

  mraUI: {
    listType: 'grid', // table, list, or grid
    disableListSearch: true, // not show the search bar
    listActionButtons: ['Add another student', 'Remove selected students'],
    listTitle: 'Student Profile',
    detailTitle: 'Student',

    detailActionButtons: ['Edit student profile', '', 'Remove this student'],

    detailRefName: {
      'StudentClass': 'Attended Classes',
      'ClassEnroll': 'Enrolled Classes',
    },

    selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
  },
};
