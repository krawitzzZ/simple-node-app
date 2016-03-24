exports.get = function(req, res) {
    res.render('index', { message: req.flash('loginMessage') });
};

exports.post = function(req, res, next) {
};