var log = require('../../libs/logger');

module.exports = function (req, res, next) {
    log.info(req.method.toUpperCase() + ' request received on ' + req.baseUrl + req.url);
    next();
};