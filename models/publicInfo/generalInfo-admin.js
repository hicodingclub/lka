const schema = require('./generalInfo');

const Brief = "signaturePicture title description tag";
const Detail = "signaturePicture | title | description "; // sequence is critical for mraUI type 'info'
const Creat = "title description signaturePicture tag";
const Edit = "title description signaturePicture tag";
const TextSearch = "title";
const Index = "title";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views, 
  api: 'LCRUD',
  name: 'General Information',
  mraUI: {
    listWidgets: {
      general: {
        views: ["list"],
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
    detailWidgetTypes: {
      general: 'info',
    },
    defaultListSort: {'title': 'asc'},
  },
};
