const schema = require('./classenroll');

var brief = "student class status createdAt[Created At]";
var detail = "student class status notes createdAt[Created At] updatedAt[Updated At] muser_id";
var create = "student class notes";
var edit = "student class status notes";
var textSearch = "student class";
var index = "student"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema, 
    views,
    name: 'Class Enrollments',
    patch: ['muser_id'], //extra fields to patch to schema
    api: 'LCRUDE',  //E - export
};