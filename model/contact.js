var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contact = new Schema({
  name: String,
  age: Number
}, {collation : 'contact'});

module.exports = mongoose.model('contact', contact);

