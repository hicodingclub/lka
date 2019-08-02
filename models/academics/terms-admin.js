const schema = require('./terms');

const Brief = "name";
const Detail = "name | content | acknowledge | tag ";
const Creat = "name content acknowledge tag";
const Edit = "name content acknowledge tag";
const TextSearch = "content";
const Index = "name";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views,
  name: 'Terms',
  mraUI: {
    listType: 'list', // list, table, or grid
  },
};
