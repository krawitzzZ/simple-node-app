var User = require('../models/user');

exports.get = function(req, res) {
    res.render('register', { message: req.flash('signupMessage') });
};

exports.post = function(req, res, next) {
};