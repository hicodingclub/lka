const schema = require('./course');

const brief = "title description";
const detail = "title description";
const create = "title description";
const edit = "title description";
const textSearch = "title description";
const index = "title";

const views = [brief, detail, create, edit, textSearch, index]


//Export model
//module.exports.model = mongoose.model('Event', StudentSchema);

module.exports = {
  schema,
  views,
  name: 'Programs',
  mraUI: {
    detailRefName: {
      'Class': 'Program Classes',
      'Teacher': 'Program Instructors'
    },
    listSelectType: 'index', // only show index field for selection
  }
};