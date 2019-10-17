var mongoose = require("mongoose");

var contact = new mongoose.Schema({
  email: String,
  password: Number
});

module.exports = mongoose.model('contact', contact, 'contact');//tên-model, tên schema, tên collection

