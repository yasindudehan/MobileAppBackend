const express=require("express");
const router=express.Router();
const stock=require("../controllers/stock.controller.js");

router.post('/submit',stock.submit);

module.exports = router;
