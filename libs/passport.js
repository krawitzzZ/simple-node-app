var LocalStrategy = require('passport-local');
var User = require('../app/models/user');

module.exports = function (passport) {
    
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, name, password, done) {
        
        process.nextTick(function () {


            // continue from here......


        })
        
        
        
        
        
    }));
    
    
    
};