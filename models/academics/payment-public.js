const schema = require('./payment');

var brief = "product productID[Product ID] price createdAt[Created At] status";
var detail = "product productID[Product ID] orderDescription[Description] price createdAt[Created At] transLogP[Transaction Log] status";
var create = "product productID[Product ID] orderDescription price transLogP transLogA status";
var edit = "status notes";
var textSearch = "product productID";
var index = "product"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema, 
    views,
    name: 'Payment',
    patch: ['muser_id'], //extra fields to patch to schema
    api: 'LCR',  //E - export
    mraUI: {
        listType: 'list', // table, list, or grid

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],
        listTitle: 'Your Payments',
        defaultListSort: {'createdAt': 'desc'},

        detailActionButtons: ['', '', ''],
        detailTitle: 'Payment',
    },
};
