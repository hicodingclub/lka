const schema = require('./student');

const brief = "first_name last_name email grade muser_id";
const detail = "first_name last_name | date_of_birth grade | email | muser_id";
const create = "first_name last_name date_of_birth email grade";
const edit = "first_name last_name date_of_birth email grade";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  patch: ['muser_id'], //extra fields to patch to schema
  // owner: {enable: true, type: 'user'},
  mraUI: {
    detailRefName: {
      'StudentClass': 'Attended Classes',
      'ClassEnroll': 'Enrolled Classes',
    },
  },
};
