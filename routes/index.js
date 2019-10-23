var express = require('express');
var router = express.Router();

var controller = require('../controller/contact.controller.js');
var contactModel = require('../model/contact.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main',async function(req, res, next){
  var contacts =await contactModel.find();
  console.log(contacts);
});

router.get('/add', controller.loadViewAdd);

router.post('/postCreate', controller.postCreate);

router.get('/list', controller.listContact);

module.exports = router;
