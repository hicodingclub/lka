const schema = require('./keynote');

const Brief = "signaturePicture title subtitle description tag";
const Detail = "signaturePicture | title | subtitle | description "; // sequence is critical for mraUI type 'slidesubtitle'
const Creat = "title subtitle description signaturePicture tag";
const Edit = "title subtitle description signaturePicture tag";
const TextSearch = "title";
const Index = "title";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views, 
  api: 'LCRUD',
  name: 'Key Notes',
  mraUI: {
    listWidgets: {
      general: {
        views: ["table", "list", "grid", "sld"],
      },
      select: {
        views: ["table", "list"],
      },
      sub: {
        views: ["table", "list"],
      },
    },
    listWidgetTypes: {
      general: "general",
      select: "select",
      sub: "sub",
    },
    detailWidgetTypes: {
      general: 'gallerySideIntro',
    },
    defaultListSort: {'title': 'asc'},
  },
};
