const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateStock(data){

    let errors = {};
    data.stockno = !isEmpty(data.stockno)?data.stockno:"";
    data.repname = !isEmpty(data.repname) ? repname : "";
    data.distname = !isEmpty(data.distname) ? distname : "";
    data.dateandtime = !isEmpty(data.dateandtime) ? data.dateandtime : "";

    data.teapouch20 = !isEmpty(data.teapouch20) ? data.teapouch20 : "";
    data.teapouch50 = !isEmpty(data.teapouch50) ? data.teapouch50 : "";
    data.teapouch100 = !isEmpty(data.teapouch100) ? data.teapouch100 : "";
    data.teapouch200 = !isEmpty(data.teapouch200) ? data.teapouch200 : "";
    data.teapouch400 = !isEmpty(data.teapouch400) ? data.teapouch400 : "";

    data.teapouch1kg1 = !isEmpty(data.teapouch1kg1) ? data.teapouch1kg1 : "";
    data.teapouch1kg2 = !isEmpty(data.teapouch1kg2) ? data.teapouch1kg2 : "";
    data.teapouch1kg3 = !isEmpty(data.teapouch1kg3) ? data.teapouch1kg3 : "";
    data.teapouch1kg4 = !isEmpty(data.teapouch1kg4) ? data.teapouch1kg4 : "";

    data.teabag1 = !isEmpty(data.teabag1) ? data.teabag1 : "";
    data.teabag2 = !isEmpty(data.teabag2) ? data.teabag2 : "";
    data.teabag3 = !isEmpty(data.teabag3) ? data.teabag3 : "";


    data.teasachet1 = !isEmpty(data.teasachet1) ? data.teasachet1 : "";
    data.teasachet2 = !isEmpty(data.teasachet2) ? data.teasachet2 : "";
    data.teasachet3 = !isEmpty(data.teasachet3) ? data.teasachet3 : "";

    data.teabulk1 = !isEmpty(data.teabulk1) ? data.teabulk1 : "";
    data.teabulk2 = !isEmpty(data.teabulk2) ? data.teabulk2 : "";
    data.teabulk3 = !isEmpty(data.teabulk3) ? data.teabulk3 : "";
    data.teabulk4 = !isEmpty(data.teabulk4) ? data.teabulk4 : "";
    data.teabulk5 = !isEmpty(data.teabulk5) ? data.teabulk5 : "";
    data.teabulk6 = !isEmpty(data.teabulk6) ? data.teabulk6 : "";

    data.teabottle = !isEmpty(data.teabottle) ? data.teabottle : "";

    data.teabasket1 = !isEmpty(data.teabasket1) ? data.teabasket1 : "";
    data.teabasket2 = !isEmpty(data.teabasket2) ? data.teabasket2 : "";  

    data.totalValue = !isEmpty(data.totalValue) ? data.totalValue : "";

if (Validator.isEmpty(data.stockno)) {
        errors.stockno = "Stock field is required";
    }
if (Validator.isEmpty(data.repname)) {
        errors.repname = "Sales rep name field is required";
    }
if (Validator.isEmpty(data.custname)) {
         errors.custname = "Customer name field  is required";
    }
if (Validator.isEmpty(data.dateandtime)) {
        errors.dateandtime = "Date and time  field  is required";
   }
if (Validator.isEmpty(data.teapouch20)) {
    errors.teapouch20 = "Item field is required";
}
if (Validator.isEmpty(data.teapouch50)) {
    errors.teapouch50 = "Item field is required";
} 
if (Validator.isEmpty(data.teapouch100)) {
    errors.teapouch100 = "Item field is required";
}
if (Validator.isEmpty(data.teapouch200)) {
    errors.teapouch200 = "Item field is required";
}
if (Validator.isEmpty(data.teapouch400)) {
    errors.teapouch400 = "Item field is required";
}
if (Validator.isEmpty(data.teapouch1kg1)) {
    errors.teapouch1kg1 = "Item field is required";
} 

if (Validator.isEmpty(data.teapouch1kg2)) {
    errors.teapouch1kg2 = "Password field is required";
}

if (Validator.isEmpty(data.teapouch1kg2)) {
    errors.teapouch1kg2 = "Item field is required";
}

if (Validator.isEmpty(data.teapouch1kg4)) {
    errors.teapouch1kg4 = "Item field is required";
}

if (Validator.isEmpty(data.teabag1)) {
    errors.teabag1 = "Item is required";
}

if (Validator.isEmpty(data.teabag2)) {
    errors.teabag2 = "Item  field is required";
}

if (Validator.isEmpty(data.teabag3)) {
    errors.teabag3 = "Item  field is required";
}
if (Validator.isEmpty(data.teasachet1)) {
    errors.teasachet1 = "Item  field is required";
}

if (Validator.isEmpty(data.teasachet2)) {
    errors.teasachet2 = "Item field is required";
}

if (Validator.isEmpty(data.teasachet3)) {
    errors.teasachet3 = "Item  field is required";
}
if (Validator.isEmpty(data.teabulk1)) {
    errors.teabulk1 = "Item  field is required";
}

if (Validator.isEmpty(data.teabulk2)) {
    errors.teabulk2 = "Item  field is required";
}

if (Validator.isEmpty(data.teabulk3)) {
    errors.teabulk3 = "Item field is required";
}
if (Validator.isEmpty(data.teabulk4)) {
    errors.teabulk4 = "Item  field is required";
}

if (Validator.isEmpty(data.teabulk5)) {
    errors.teabulk5 = "Item field is required";
}
if (Validator.isEmpty(data.teabulk6)) {
    errors.teabulk6 = "Item  field is required";
}
if (Validator.isEmpty(data.teabottle)) {
    errors.teabottle = "Item  field is required";
}
if (Validator.isEmpty(data.teabasket1)) {
    errors.teabasket1 = "Item  field is required";
}
if (Validator.isEmpty(data.teabasket2)) {
    errors.teabasket2 = "Item  field is required";
}
if (Validator.isEmpty (data.totalValue)) {
    errors.totalValue = "Item field is required";
}
    return {
        errors,
        isValid: isEmpty(errors)
    };

 
}