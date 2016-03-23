var User = require('../models/user');
var mongoose = require('../../libs/mongoose');
var log = require('../../libs/logger');

module.exports = function(req, res) {

    User.find(function (err, users) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });

};