const mongoose = require('mongoose');

let eventDef = require('./event-admin');
let generalInfoDef = require('./generalInfo-admin');
let keyNoteDef = require('./keynote-admin');
let faqDef = require('./faq-admin');
let articleDef = require('./article-admin');
const schemas = {
  'Event': eventDef,
  "Article": articleDef,
  'Faq': faqDef,
  'GeneralInfo': generalInfoDef,
  'KeyNote': keyNoteDef,
};

const config = {
  dateFormat: 'MM-DD-YYYY',
  timeFormat: 'hh:mm:ss'
}

const authz = {
  'module-authz': {'LoginUser': 'R', 'Anyone': ''}
}

const DB_CONFIG = {
  APP_NAME: process.env.APP_NAME,
  MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = {schemas, config, authz, DB_CONFIG};