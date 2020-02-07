const express=require("express");
const router=express.Router();
const stock=require("../controllers/stock.controller.js");
const validateCust = require("../validation/stock.validation");

router.post('/submit',stock.submit);

module.exports = router;
