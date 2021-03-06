var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, editor: true},
    price: {type: String, required: true},
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