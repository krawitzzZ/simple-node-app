var util = require('util');

module.exports = function NewError(status, name, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, NewError);
    util.inherits(NewError, Error);
    NewError.prototype.name = name;
};
