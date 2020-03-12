var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    product: { type: String, required: true},
    productID: { type: String, required: true },
    orderDescription: { type: String, required: true },
    price: { type: String, required: true },
    transLogP: { type: String, required: true },
    transLogA: { type: String, required: true },
    status: {type: String, required: true},
    notes: {type: String, textarea: true},
  },
  {
    timestamps: true
  }
);

module.exports = schema;
