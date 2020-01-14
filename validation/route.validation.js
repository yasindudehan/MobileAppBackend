const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRoute(data){


    data.areaName = !isEmpty(data.areaName) ? data.email : "";
    data.routeName = !isEmpty(data.routeName) ? data.phoneNoo : "";
    data.customerName = !isEmpty(data.customerName) ? data.address : "";



    if (Validator.isEmpty(data.areaName)) {
        errors.areaName = "Area name field is required";
    }
    if (Validator.isEmpty(data.routeName)) {
        errors.routeName= "Sales rep name field is required";
    }
    if (Validator.isEmpty(data.customerName)) {
         errors.customerName = "Customer name field  is required";
    }

























    return {
        errors,
        isValid: isEmpty(errors)
    };

 
}