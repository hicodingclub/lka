const schema = require('./event');

const brief = "signaturePicture title author publishDate";
const detail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "title author content signaturePicture";
const edit = "title author content signaturePicture";
const textSearch = "title author content" 
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  name: 'Event and News',

  mraUI: {
    listWidgets: {
      general: {
        views: ["list", "grid", "table"],
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
      general: 'post',
    },
    listToDetail: 'click', // link, click, or none
    defaultListSort: {'publishDate': 'desc'},
  },
};