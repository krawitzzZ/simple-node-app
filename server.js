var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var config = require('config');
var log = require('./libs/logger');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('morgan')('dev'));
app.set('views', './views');
app.set('view engine', 'jade');

//require('./libs/passport')(passport);

var sessionStore = require('./libs/sessionStore');
app.use(session({
    secret: config.get('session.secret'),
    key: config.get('session.key'),
    cookie: config.get('session.cookie'),
    resave: config.get('session.resave'),
    saveUninitialized: config.get('session.saveUninitialized'),
    store: sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var router = express.Router();
app.use('/', router);
require('./app/routes')(router, passport);


var port = process.env.PORT || config.get('port');
app.listen(port);
log.info("App listening on port " + port);