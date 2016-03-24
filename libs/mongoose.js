var mongoose = require('mongoose');
var config = require('config');
var log = require('./logger');

mongoose.connect(config.get('mongoose.uri'), config.get('mongoose.options'));

mongoose.connection.on('open', function (err) {

    if (err) {
        log.error('failed connecting to database', err);
    } else {
        console.info('connected to database');
    }

});

mongoose.connection.on('error', function (err) {
    log.error('failed connecting to database', err);
});


module.exports = mongoose;