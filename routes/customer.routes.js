const express = require("express");
const router = express.Router();
const customer = require("../controllers/customer.controller");

router.get("/select", customer.view);
router.post("/select", customer.select);
module.exports = router;
  

const express = require("express");
const router = express.Router();
const customer = require("../controllers/customer.controller");
const validateCust = require("../validation/cust.validation");

router.get("/select", customer.view);
router.post("/", validateCust, customer.create);
module.exports = router;
