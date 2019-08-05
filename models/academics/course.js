var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    title: {type: String, required: true, maxlength: 100},
    description: {type: String, required: true, editor: true},
  }
);

// Virtual for Student's full name
schema.virtual('name').get(function () {
  return this.last_name + ', ' + this.first_name;
});

module.exports = schema;
