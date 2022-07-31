// Note: this schema is a clone of auth/model.user. Edit must be made on both sides

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, required: true, index: { unique: true, sparse: true } },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: { unique: true, sparse: true },
    mraEmailRecipient: true, // if this email can be used by sendEmail Action 
  },
  phone: {
    type: String,
    trim: true,
    index: { unique: true, sparse: true },
  },
  status:    {type: String, enum: ['Enabled', 'Disabled', 'Pending'], default: 'Enabled'},
  since: { type: Date, default: Date.now },
  password: { type: String, required: true },


  firstname: {type: String, maxlength: 100},
  lastname: {type: String, maxlength: 100},
  photo: {type: String,
    mraType: 'picture', mraSharable: false},
  description: {type: String, textarea: true},
});

module.exports = schema;
