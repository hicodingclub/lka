const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String, required: false,
      slideTitle: true,
      galleryTitle: true,
    },
    subtitle: {
      type: String, required: false,
      slideSubTitle: true,
      gallerySubTitle: true,
    },
    description: {
      type: String, required: false, maxlength: 1000,
      slideDescription: true,
    },
    signaturePicture: {
      type: String,  required: false,
      mraType: 'picture',  aspectRatio: 16/9,  mraSharable: true,
      important:
      "To load web page fast, select a high resolution picture, but limit the size to 400 KB.",
      slidePicture: true,
      galleryPicture: true,
    },
    linkDisplay: {
      type: String,
      slideLinkDisplay: true,
      description: "The display name of the link button, such as 'Learn more'. For slide only."
    },
    linkURL: {
      type: String,
      slideLinkURL: true,
      description: "Full URL that users can go from link button. For slide only."
    },
    tag: {type: String, required: false, maxlength: 50},
  }
);

module.exports = schema;