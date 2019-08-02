const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {type: String, required: true},
    content: {type: String, editor: true, required: true},
    acknowledge: {type: String, required: false, maxlength: 1000},
    tag: {type: String, required: false, maxlength: 50},
  }
);

module.exports = schema;
