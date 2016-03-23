var log = require('../../libs/logger');

module.exports = function (router) {

    router.use(function (req, res, next) {
        log.info('request received');
        next();
    });

    router.get('/', require('./main'));

    router.post('/users', require('./create_user'));

    router.get('/users', require('./get_users'));

    router.get('/users/:user_id', require('./get_single_user'));

    router.put('/users/:user_id', require('./update_user'));

    router.delete('/users/:user_id', require('./delete_user'));

};