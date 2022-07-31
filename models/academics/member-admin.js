
const schema = require('./member');

const brief = "firstname lastname email phone";
const detail = "firstname lastname email phone";
const create = "firstname lastname email phone";
const edit = "firstname lastname email phone";
const textSearch = "firstname lastname";
const index = "email";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,

  views,
  api: "LR", //E - export, M - eMail, A - Archive
  name: "Member",
  mraUI: {
    listWidgets: {
      general: {
        views: ['table', 'list', 'grid',],
      },
      select: {
        views: ['table', 'list'],
      },
      sub: {
        views: ['table', 'list'],
      }
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },

    listTitle: 'Members',
    detailTitle: 'Member',
  },

  mraBE: {
    collection: `${process.env.APP_NAME}_auth_muser`, // MongdoDB collection corresponding to this schema
  },
}
