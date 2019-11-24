var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    courses: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
    introduction: {type: String, required: true, textarea: true},
    email: {
      type: String, required: true, mraEmailRecipient: true, // if this email can be used by sendEmail Action 
    },
    phoneNumber: {type: String},
    // mraType: a link to a picture; mraPresent: present the picture; mraSharable: if the picture is sharable with other items
    photo: {type: String,  required: true,
      mraType: 'picture', mraSharable: false},
  }
);

schema.virtual('name').get(function () {
  if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName;
  }
  let fullName = this.firstName || this.lastName;
  if (!fullName) fullName = "Unknown"
  return fullName;
});

module.exports = schema;
