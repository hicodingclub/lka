const schema = require('./article');

const brief = "signaturePicture title author publishDate category";
const detail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "category title author content signaturePicture";
const edit = "category title author content signaturePicture";
const textSearch = "title author content" 
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  name: 'Resource',

  mraUI: {
    listWidgets: {
      general: {
        views: ["table", "list",],
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