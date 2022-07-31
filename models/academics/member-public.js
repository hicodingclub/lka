
const schema = require('./member');

const brief = "firstname lastname photo";
const detail = "firstname lastname photo";
const create = "firstname lastname photo";
const edit = "firstname lastname photo";
const textSearch = "firstname lastname";
const index = "firstname lastname";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: "", //Not show on public. Identical to user profile
  name: "Member",
  mraUI: {
  },
  mraBE: {
    collection: `${process.env.APP_NAME}_auth_muser`, // MongdoDB collection corresponding to this schema
  },
};
