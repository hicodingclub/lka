const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, editor: true},
    price: { type: Number,  exclusiveRequired: true, mraType: 'currency'},
    priceOptions: {
      type: Map,
      of: {type: Number, mraType: 'currency'},
  
      exclusiveRequiredWith: 'price',
  
      description: 'Provide serveral price options',
      keyDescription: "The price option",
      valueDescription: "The price",
    },
    season: {type: String, maxlength: 50},
    startTime: {type: Date, required: true, mraType: 'mediumDate'},
    endTime: {type: Date, required: true, mraType: 'mediumDate'},
    duration: {type: String, required: false},
    dayOfWeek: {type: [String], enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
                 default: ['Mon'],  elementunique: true, required: false},
    timeSlot: {type: String, required: false},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    enrollTerm: {type: Schema.Types.ObjectId, ref: 'Terms', required: true},
    hot: {type: Boolean, default: false}
  }
);

module.exports = schema;
