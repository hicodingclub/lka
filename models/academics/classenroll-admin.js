const schema = require('./classenroll');

var brief = "student class price status member createdAt[Created At]";
var detail = "student class price status notes createdAt[Created At] updatedAt[Updated At] member";
var create = "student class price notes member";
var edit = "student class status price notes member";
var textSearch = "student class";
var index = "student"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema, 
    views,
    name: 'Class Enrollments',
    // patch: ['muser_id'], //extra fields to patch to schema
    api: 'LCRUDE',  //E - export
    mraUI: { defaultListSort: { createdAt: 'desc' } },
};