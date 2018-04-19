const mongoose = require('mongoose');
const Promise = require('bluebird');
const { log, error, info, warn } = require('../../utils');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp';
mongoose.connect(url, {
  useMongoClient: true,
  autoReconnect: true
});
mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', e => {
  log(error(`mongodb occur error, url: ${url}, error: ${e}`));
});
db.once('open', () => {
  log(info(`mongodb connection open, url: ${url}`));
});
db.on('connected', () => {
  log(info(`mongodb connected , url: ${url}`));
});
db.on('reconnected', () => {
  log(warn(`mongodb reconnected , url: ${url}`));
});

module.exports = mongoose;
