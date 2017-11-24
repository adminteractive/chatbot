// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var abcSchema = new Schema({
  text: String,
  addedBy: String,
  timestamp: Date
});

// the schema is useless so far
// we need to create a model using it
var Abc = mongoose.model('Abc', abcSchema);

// make this available to our users in our Node applications
module.exports = Abc;