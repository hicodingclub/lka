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
  name: "Instructors",
  api: 'LCRUDM',  //E - export, M - eMail
  mraUI: {
    listType: 'grid', // table, list, or grid
  },
};
