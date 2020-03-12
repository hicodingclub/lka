const schema = require('./classenroll');

var brief = "student class status createdAt[Created Time]";
var detail = "student class status notes createdAt[Created Time]";
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
    owner: {enable: true, type: 'user'},
    api: "LCR",
    mraUI: {
        listType: 'table', // table, list, or grid

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],
        listTitle: 'Your Class Enrollments',
        defaultListSort: {'createdAt': 'desc'},

        detailActionButtons: ['', '', ''],
        detailRefName: { // if being referenced, what name to show
          'StudentClass': 'Attended Classes',
          'ClassEnroll': 'Enrolled Classes',
        },
    
        detailTitle: 'Enrollment',
        detailActions: [["Make Payment", "/actions/pay"]],

        selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
    },
};