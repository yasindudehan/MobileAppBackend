const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller.js");
const validateCust = require("../validation/order.validation");

router.post("/submit", order.submit);

module.exports = router;

 


