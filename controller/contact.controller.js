var contactModel = require('../model/contact.js');

module.exports.loadViewAdd= (req, res, next) => {
   res.render('them', { csrfToken: req.csrfToken() });
}
module.exports.postCreate = (req, res, next) => {
    var promise = contactModel.create({ email: req.body.email, password:req.body.password });
    // promise.then(function (msg) {
    //   console.log('thành công');
    // })
    res.redirect('list');
}
module.exports.listContact= async (req, res, next) => {
    var result= await contactModel.find();
    res.render('main', {result: result, title: 'Trang  chu'});
}

module.exports.deleteContact= (req, res, next) =>{
    contactModel.deleteOne({ _id: req.params.id }, function (err) {
        if(err) console.log(err);
    });
    res.redirect('../list');
}