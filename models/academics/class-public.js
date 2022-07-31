const schema = require('./class');

const brief = "title (course)[Program] (season) startTime endTime dayOfWeek timeSlot (enrollTerm) (price) (priceOptions)";
const detail = "title | course[Program] teacher[Instructor] | price priceOptions | season startTime endTime duration | dayOfWeek timeSlot | description | (enrollTerm)";
const creat = "title course[Program] description teacher[Instructor] price priceOptions season startTime endTime dayOfWeek hot";
const edit = "title course[Program] description teacher[Instructor] price priceOptions season startTime endTime dayOfWeek hot";
const textSearch = "title teacher course";
const index = "title";

const views = [brief, detail, creat, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  api: 'LR',
  mraUI: {
    listWidgets: {
      general: {
        views: ['table', 'list'],
      },
      select: {
        views: ['list'],
      },
      sub: {
        views: ['list'],
      },
      calendar: {
        views: ['calendar'],
      },
      'view-only': {
        views: ['list'],
      }
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
    listExtraWidgets: ['view-only'],

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
    listIncludeSubDetail: false,
    listTitle: 'Programs and Classes',
    detailTitle: 'Class',

    selectActionViewType: 'dropdown', // select extraView type: dropdown, grid, table, list
  },
  mraBE: {
    valueSearchFields: ['season'],
  },
};
