var contactModel = require('../model/contact.js');

module.exports.loadViewAdd= (req, res, next) => {
   res.render('them', { csrfToken: req.csrfToken() });
}
module.exports.postCreate = (req, res, next) => {
    var promise = contactModel.create({ email: req.body.email, password:req.body.password });
    // promise.then(function (msg) {
    //   console.log('thành công');
    // })
    res.redirect('add');
}
module.exports.listContact= async (req, res, next) => {
    var result= await contactModel.find();
    res.render('main', {result: result, title: 'Trang  chu'});
}