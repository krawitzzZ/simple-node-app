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

            if (name.length < 3) {
                return done(null, false, req.flash('signupMessage', 'Name must have at least 3 symbols'));
            }

            if (password.length < 3) {
                return done(null, false, req.flash('signupMessage', 'Password must have at least 3 symbols'));
            }

            User.findOne({ 'local.name': name }, function (err, user) {

                if (err) {
                    done(err);
                }

                if (user) {
                    return done(null, false, req.flash('signupMessage', 'This name already in use'));
                } else {
                    var newUser = new User();
                    newUser.local.name = name;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        done(null, newUser);
                    });
                }
            });
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, name, password, done) {
        process.nextTick(function () {

            User.findOne({ 'local.name': name }, function (err, user) {

                if (err) {
                    done(err);
                }

                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found'));
                }

                if (!user.validPassword(password)) {
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password'));
                }

                return done(null, user);
            });
        });
    }));
};