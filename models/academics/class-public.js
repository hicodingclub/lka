const schema = require('./class');

var brief = "title (course)[Program] (season) startTime endTime dayOfWeek timeSlot (enrollTerm)";
var detail = "title | description | course[Program] teacher[Instructor] price | season startTime endTime duration | dayOfWeek timeSlot (enrollTerm)";
var creat = "title course[Program] description teacher[Instructor] price season startTime endTime dayOfWeek hot";
var edit = "title course[Program] description teacher[Instructor] price season startTime endTime dayOfWeek hot";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  api: 'LR',
  listWidgets: ['sel'], //clean - clean list view - list only, sel: select view for pipeline/composite
  mraUI: {
    listType: 'table', // table, list, or grid
    listToDetail: 'link', // link, click, none
    listItemPipelines: [],
    detailActions: [["Enroll", "/actions/enroll"]],

    detailRefBlackList: ['StudentClass', 'ClassEnroll'], // not show these reference sub list in detail view

    listCategories: [
      {
        listCategoryField: 'course',
        listCategoryShowMore: 'description', //if listCategoryField is a reference, show more info of this ref (list of fields to show)
      },
      {
        listCategoryField: 'season',
      },
    ],
    listTitle: 'Programs and Classes',
    detailTitle: 'Class',

    selectActionViewType: 'dropdown', // select extraView type: dropdown, grid, table, list
  },
  mraBE: {
    valueSearchFields: ['season'],
  },
};
