var log = require('../../libs/logger');
var isLoggedIn = require('../../libs/middleware/isLoggedIn');

module.exports = function (router, passport) {

    router.use(function (req, res, next) {
        log.info('request received on ' + req.baseUrl + req.url);
        next();
    });

    router.get('/', require('./home').get);
    router.post('/', require('./home').post);

    router.get('/api/register', require('./register').get);
    router.post('/api/register', require('./register').post);

    router.get('/api/chat', isLoggedIn, require('./chat').get);

    router.post('/api/logout', require('./logout').post);

};