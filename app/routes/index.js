var isLoggedIn = require('../../libs/middleware/isLoggedIn');

module.exports = function (router, passport) {

    router.use(require('../../libs/middleware/requestLogger'));

    router.get('/', require('./home'));

    router.post('/', passport.authenticate('local-login', {
        successRedirect: '/api/chat',
        failureRedirect: '/',
        failureFlash: true
    }));

    router.get('/api/register', require('./register'));

    router.post('/api/register', passport.authenticate('local-signup', {
        successRedirect: '/api/chat',
        failureRedirect: '/api/register',
        failureFlash: true
    }));

    router.get('/api/chat', isLoggedIn, require('./chat'));

    router.get('/api/logout', require('./logout'));

};