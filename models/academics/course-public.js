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
  api: "LR",
  mraUI: {
    listTitle: 'All Programs',
    detailTitle: 'Program',

    detailRefName: {
      'Class': 'Program Classes',
    },
    detailRefBlackList: ['Teacher'], // not show these reference sub list in detail view

  }
};
