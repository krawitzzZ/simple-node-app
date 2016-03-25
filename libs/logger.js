var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: true,
            colorize: true,
            handleExceptions: true,
            json: false,
            level: 'debug'
        }),
        new winston.transports.File({
            timestamp: true,
            colorize: true,
            handleExceptions: true,
            json: true,
            level: 'error',
            filename: 'logs.log',
            maxsize: 10485760 //10MB
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
