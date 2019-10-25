var contactModel = require('../model/contact.js');

module.exports.loadViewAdd= (req, res, next) => {
   res.render('them', { csrfToken: req.csrfToken() });
}
module.exports.postCreate = (req, res, next) => {
    var promise = contactModel.create({ email: req.body.email, password:req.body.password });
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

module.exports.getContactById= async (req, res, next) => {
    var contact =await contactModel.find({ _id: req.params.id });
    res.render('sua', { contact: contact, csrfToken: req.csrfToken() });
}
module.exports.updateContact= (req, res, next) => {
    contactModel.findOne({ _id: req.body._id }, function (err, doc){
        doc.email = req.body.email;
        doc.password= req.body.password;
        doc.save();
    });
    res.redirect('../list');
}