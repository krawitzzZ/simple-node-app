module.exports = function (req, res, next) {

    res.sendError = function (error) {
        res.status = error.status;
        if (req.headers['x-requested-with']  = 'XMLHttpRequest') {
            res.json(error);
        } else {
            res.render('error', { error: error });
        }
    };

    next();

};