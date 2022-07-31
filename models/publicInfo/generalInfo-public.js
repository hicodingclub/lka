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
  name: 'General Information',
  api: "LR",
  mraUI: {
    api: "R", // Only generate detailed view for front end.

    detailWidgetTypes: {
      general: 'info',
    },
  },
};
