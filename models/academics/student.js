var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const phonePattern = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/
const validatePhone = function (phone) {
  return phonePattern.test(phone);
};

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validateEmail = function (email) {
  return emailPattern.test(email);
};

var schema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date, mraType: 'mediumDate'},
    email: {
      type: String, required: true, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please enter a valid email address"],
      match: [emailPattern, "Please enter a valid email address"],
      mraEmailRecipient: true, // if this email can be used by sendEmail Action
    },
    phoneNumber: {
      type: String, required: true, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number'],
      match: [phonePattern, "Please enter a valid phone number"],
    },
    school: {type: String, required: true, maxlength: 100},
    grade: {type: Number, required: true},
    GuardianOneName: {type: String, required: false, maxlength: 100},
    GuardianOnePhone: {type: String, required: false, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number'],
      match: [phonePattern, "Please enter a valid phone number"],
      required: true,
    },
    GuardianOneEmail: {type: String, required: false, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [emailPattern, "Please enter a valid email address"],
      mraEmailRecipient: true, // if this email can be used by sendEmail Action
    },

    GuardianTwoName: {type: String, required: false, maxlength: 100},
    GuardianTwoPhone: {type: String, required: false, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number'],
      match: [phonePattern, "Please enter a valid phone number"],

    },
    GuardianTwoEmail: {type: String, required: false, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [emailPattern, "Please enter a valid email address"],
      mraEmailRecipient: true, // if this email can be used by sendEmail Action
    },
    member: { type: Schema.Types.ObjectId, ref: 'Member' }, //reference to the associated member. Not required to allow any one to register.
    notes: {type: String, textarea: true},
  },
  {
    timestamps: true
  }
);

// Virtual for Student's full name
schema.virtual('name').get(function () {
  if (this.first_name && this.last_name) {
      return this.first_name + ' ' + this.last_name;
  }
  let fullName = this.first_name || this.last_name;
  if (!fullName) fullName = "Unknown"
  return fullName;
});

module.exports = schema;
