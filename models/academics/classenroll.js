var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    student: { type: [{type: Schema.Types.ObjectId, ref: 'Student'}], required: true,
      validate: v => v == null || v.length > 0
    }, //reference to the associated student
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true }, //reference to the associated course instance
    status: {type: String, enum: ['processing', 'paid', 'confirmed', 'cancelled'], 
                 default: 'processing', required: true},
    notes: {type: String, textarea: true},
  },
  {
    timestamps: true
  }
);

module.exports = schema;
