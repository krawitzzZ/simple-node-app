exports.post = function(req, res, next) {
    req.logout();
    res.redirect('/');
};