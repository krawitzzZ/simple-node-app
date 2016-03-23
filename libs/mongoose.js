var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.get('mongoose.uri'), config.get('mongoose.options'));

mongoose.connection.on('open', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to database');
    }
});

module.exports = mongoose;