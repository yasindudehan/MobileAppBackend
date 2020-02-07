const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEmail(data){


    data.senderName = !isEmpty(data.UserName) ? data.Sender : "";
    data.receiverName= !isEmpty(data.Password) ? data.receiverName : "";
    data.mailContent = !isEmpty(data.Password) ? data.Content : "";
   



    if (Validator.isEmpty(data.Sender)) {
        errors.senderName = "Sender field is required";
    }
    if (Validator.isEmpty(data.Receiver)) {
        errors.receiverName = "Password field is required";
    }
    if (Validator.isEmpty(data.mailContent)) {
        errors.mailContent = "Content field is required";
    }
   

    return {
        errors,
        isValid: isEmpty(errors)
    };

 
}