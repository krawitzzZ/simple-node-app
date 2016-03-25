module.exports = function(req, res) {
    res.render('register', {
        message: req.flash('signupMessage'),
        user : req.user,
        register: 'active'
    });
};