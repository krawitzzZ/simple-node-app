module.exports = function(req, res) {
    res.render('index', {
        message: req.flash('loginMessage'),
        user : req.user,
        home: 'active'
    });
};
