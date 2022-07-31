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
    api: 'R', // Only generated detailed view in front end.

    listWidgets: {
      general: {
        views: ['list'],
      },
    },
    listWidgetTypes: {
      general: 'general',
    },

    detailWidgetTypes: {
      'general': 'term', // use the 'term' view in detailed page
    },

    detailRefBlackList: ['Class'], // not show these reference sub list in detail view
  },
};
