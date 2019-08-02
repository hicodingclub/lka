const schema = require('./student_class');

var brief = "student class";
var detail = "student class";
var create = "student class";
var edit = "student class";
var textSearch = "student class";
var index = "student"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema, 
    views,
    embeddedViewOnly: true,  //only viewable from sub-view
    api: 'LCRUDE',  //E - export
};