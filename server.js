var express = require('express');
var bodyParser = require('body-parser');
var config = require('config');
var log = require('./libs/logger');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(require('morgan')({stream: log.stream}));

var router = express.Router();
require('./app/routes')(router);
app.use('/api', router);


var port = process.env.PORT || config.get('port');
app.listen(port);
log.info("App listening on port " + port);