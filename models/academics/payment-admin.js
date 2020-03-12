const schema = require('./payment');

var brief = "product productID[Product ID] price createdAt[Created At] status";
var detail = "product productID[Product ID] orderDescription[Description] price createdAt[Created At] transLogP[Transaction Log] transLogA[Transaction Log - Admin] status";
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
    api: 'LRUD',  //E - export
};
