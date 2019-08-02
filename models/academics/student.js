var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const validatePhone = function(phone) {
  var re = /^(\d+-?)+\d+$/;
  return re.test(phone)
}

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}

var schema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    email: {
      type: String, required: true, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    phoneNumber: {
      type: String, required: true, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number']
    },
    school: {type: String, required: true, maxlength: 100},
    grade: {type: Number, required: true},
    GuardianOneName: {type: String, required: false, maxlength: 100},
    GuardianOnePhone: {type: String, required: false, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number'],
      required: true,
    },
    GuardianOneEmail: {type: String, required: false, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },

    GuardianTwoName: {type: String, required: false, maxlength: 100},
    GuardianTwoPhone: {type: String, required: false, maxlength: 20,
      trim: true,
      validate: [validatePhone, 'Please fill a valid phone number']
    },
    GuardianTwoEmail: {type: String, required: false, maxlength: 100,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
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

const emailValidate = [
  {validator: validateEmail, msg: "Please fill a valid email address."},
];
const phoneValidate = [
  {validator: validatePhone, msg: "Please fill a valid phone number."},
];
const validators = {
  "email": emailValidate,
  "GuardianOneEmail": emailValidate,
  "GuardianTwoEmail": emailValidate,
  "phoneNumber": phoneValidate,
  "GuardianOnePhone": phoneValidate,
  "GuardianTwoPhone": phoneValidate,
}
schema.mddsValidators = validators;

module.exports = schema;
