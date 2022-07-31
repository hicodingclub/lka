const schema = require("./student");

const brief = "first_name last_name email phoneNumber grade";
const detail =
  "first_name last_name | date_of_birth grade | email phoneNumber | school | GuardianOneName GuardianOnePhone GuardianOneEmail | GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const create =
  "first_name[Student First Name] last_name[Student Last Name] date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const edit =
  "first_name[Student First Name] last_name[Student Last Name] date_of_birth grade email phoneNumber school GuardianOneName GuardianOnePhone GuardianOneEmail GuardianTwoName GuardianTwoPhone GuardianTwoEmail";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: "LCRU",

  // patch: ["muser_id"], //extra fields to patch to schema
  // owner: { enable: true, type: "user" },
  owner: { enable: true, type: 'user', field: 'member' },

  mraUI: {
    listWidgets: {
      general: {
        views: ["grid"],
      },
      select: {
        views: ["list"],
      },
      sub: {
        views: ["list"],
      },
      'sel-add-edit': {
        views: ['grid'],
      }
    },
    listWidgetTypes: {
      general: "general",
      select: "sel-add-edit",
      sub: "sub",
    },

    disableListSearch: true, // not show the search bar
    listActionButtons: ["Add another student", ], //"Remove selected students"
    listTitle: "Student Profile",
    detailTitle: "Student",

    detailActionButtons: ["Edit student profile", "", ""], // "Remove this student"

    detailRefName: {
      // if showing reference tab, what name to show
      StudentClass: "Attended Classes",
      ClassEnroll: "Enrolled Classes",
    },

    selectActionViewType: "grid", // select extraView type: dropdown, grid, table, list
  },
};
