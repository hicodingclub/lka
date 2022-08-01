const schema = require('./faq');

const Brief = "question answer (order)";
const Detail = "question | answer ";
const Creat = "question answer order enable";
const Edit = "question answer order enable";
const TextSearch = "question";
const Index = "question";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views,
  name: 'FAQ',
  api: 'L',
  mraUI: {
    listWidgets: {
      general: {
        views: ["list"],
      },
    },
    listWidgetTypes: {
      general: "general",
    },
    defaultListSort: {'order': 'asc'},
    publicListFilter: {'enable': true},

    listTitle: 'Frequently Asked Questions',

  },
  mraBE: {
    searchObj: {
        enable: true,
    }
  }
};
