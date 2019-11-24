const schema = require('./student');

const brief = "first_name last_name email grade school GuardianOnePhone muser_id";
const detail = "first_name last_name | date_of_birth grade | email phoneNumber | school | GuardianOneName GuardianOnePhone GuardianOneEmail | GuardianTwoName GuardianTwoPhone GuardianTwoEmail | notes | muser_id";
const create = "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail notes muser_id ";
const edit = "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail notes muser_id";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: 'LCRUDM',  //E - export, M - eMail
  patch: ['muser_id'], //extra fields to patch to schema
  // owner: {enable: true, type: 'user'},
  mraUI: {
    detailRefName: {
      'StudentClass': 'Attended Classes',
      'ClassEnroll': 'Enrolled Classes',
    },
  },
};
