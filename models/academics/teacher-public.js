const schema = require('./teacher');

const brief = "firstName lastName courses[Program] introduction photo";
const detail = "firstName lastName | email | phoneNumber  courses[Program] | introduction | photo";
const create = "firstName lastName courses[Program] introduction email phoneNumber photo";
const edit = "firstName lastName courses[Program] introduction email phoneNumber photo";
const textSearch = "firstName lastName courses email phoneNumber";
const index = "firstName lastName";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: "LR",
  name: "Instructors",
  mraUI: {
    listWidgets: {
      general: {
        views: ["grid"],
      },
    },
    listWidgetTypes: {
      general: "general",
    },
    listTitle: 'Instructors',
    detailTitle: 'Instructor',
    listIncludeSubDetail: false,
    listToDetail: 'link', // link, click, or none
  },
};
