const schema = require('./payment');

const brief =
  "product productID[Product ID] price createdAt[Created At] status member";
const detail =
  "product productID[Product ID] orderDescription[Description] price createdAt[Created At] transLogP[Transaction Log] transLogA[Transaction Log - Admin] status member";
const create =
  "product productID[Product ID] orderDescription price transLogP transLogA status member";
const edit = "status notes";
const textSearch = "product productID";
const index = "product"; //let's temporarily put any field here since this schema is not referred.

const views = [brief, detail, create, edit, textSearch, index];


//Export model
module.exports = {
  schema,
  views,
  name: "Payment",
  // patch: ["muser_id"], //extra fields to patch to schema
  api: "LRUD", //E - export
  mraUI: {
    listWidgets: {
      general: {
        views: ["list"],
      },
    },
    listWidgetTypes: {
      general: "general",
      select: "general",
      sub: "general",
    },

    defaultListSort: { createdAt: "desc" },
  },
};