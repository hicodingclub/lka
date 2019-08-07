const schema = require('./class');

var brief = "title (course)[Program] startTime endTime dayOfWeek timeSlot (enrollTerm)";
var detail = "title | description | course[Program] teacher[Instructor] price | startTime endTime duration | dayOfWeek timeSlot";
var creat = "title course[Program] description teacher[Instructor] price startTime endTime dayOfWeek hot";
var edit = "title course[Program] description teacher[Instructor] price startTime endTime dayOfWeek hot";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  api: 'LR',
  actionViews: 'HS', //home - home page list view, s: select view for pipeline/composite
  mraUI: {
    listType: 'table', // table, list, or grid
    listToDetail: 'link', // link, click, none
    listItemPipelines: [],
    detailActions: [["Enroll", "/actions/enroll"]],

    detailRefBlackList: ['StudentClass', 'ClassEnroll'], // not show these reference sub list in detail view

    listCategoryField: 'course',
    listCategoryShowMore: 'description', //if listCategoryField is a reference, show more info of this ref (list of fields to show)

    listTitle: 'Programs and Classes',

    detailTitle: 'Class',

    homeListNumber: 6,

    selectActionViewType: 'dropdown', // select extraView type: dropdown, grid, table, list
  },
};
