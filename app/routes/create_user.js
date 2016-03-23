var User = require('../models/user');
var mongoose = require('../../libs/mongoose');
var log = require('../../libs/logger');

module.exports = function(req, res) {

    var user = new User();

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.created = new Date();

    log.info(user.name, user.surname, user.age, user.created);

    user.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: "User created!" });
        }
    });

};