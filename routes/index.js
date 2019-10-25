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
});

router.get('/add', controller.loadViewAdd);

router.post('/postCreate', controller.postCreate);

router.get('/list', controller.listContact);

router.get('/delete/:id', controller.deleteContact);

router.get('/contact/:id', controller.getContactById);

router.post('/update-contact', controller.updateContact);

router.post('/search', controller.searchContact);
module.exports = router;
