var mongoose = require('../../libs/mongoose');
var bcrypt = require('bcrypt-nodejs');


var userSchema = new mongoose.Schema({

    local: {
        name: {
            type: String,
            unique: true,
            sparse: true
        },
        password: String
    },
    vkontakte: {
        id: String,
        token: String,
        name: String,
        email: String
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);