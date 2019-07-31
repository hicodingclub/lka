const schema = require('./terms');

const Brief = "name content acknowledge"; // must be a super set of details view
const Detail = "content | acknowledge "; // Terms view sequence
const Creat = "name content acknowledge tag";
const Edit = "name content acknowledge tag";
const TextSearch = "content";
const Index = "name";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views,
  name: 'Terms',
  api: 'LR',
  mraUI: {
    detailType: 'term', ////use the 'term' view in detailed page
    listType: 'list', // list, table, or grid
  },
};
