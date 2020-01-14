const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUser(data){


    data.UserName = !isEmpty(data.UserName) ? data.UserName : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";
   



    if (Validator.isEmpty(data.Username)) {
        errors.Username = "Username field is required";
    }
    if (Validator.isEmpty(data.Password)) {
        errors.Password = "Password field is required";
    }
   

    return {
        errors,
        isValid: isEmpty(errors)
    };

 
}