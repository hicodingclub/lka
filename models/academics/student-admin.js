const schema = require("./student");

const brief =
  "first_name last_name email grade school GuardianOnePhone member";
const detail =
  "first_name last_name | date_of_birth grade | email phoneNumber | school | GuardianOneName GuardianOnePhone GuardianOneEmail | GuardianTwoName GuardianTwoPhone GuardianTwoEmail | notes | member";
const create =
  "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail notes member ";
const edit =
  "first_name last_name date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail notes member";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";
const association =
  "first_name last_name email grade school GuardianOnePhone";

const views = [brief, detail, create, edit, textSearch, index, association];

module.exports = {
  schema,
  views,
  api: "LCRUDM", //E - export, M - eMail
  // patch: ["muser_id"], //extra fields to patch to schema
  // owner: {enable: true, type: 'user'},
  mraUI: {
    listWidgets: {
      general: {
        views: ["table", "grid", "list"],
      },
      select: {
        views: ["list"],
      },
      sub: {
        views: ["list"],
      },
    },
    listWidgetTypes: {
      general: "general",
      select: "select",
      sub: "sub",
    },

    detailRefName: {
      // if showing reference tab, what name to show
      StudentClass: "Attended Classes",
      ClassEnroll: "Enrolled Classes",
    },
  },
};
