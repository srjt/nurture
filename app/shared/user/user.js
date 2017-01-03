"use strict";
var emailValidator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return emailValidator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map