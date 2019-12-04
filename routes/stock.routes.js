const express=require("express");
const router=express.Router();
const stock=require("../controllers/stock.controller.js");

router.post('/submit1',stock.submit1);

module.exports = router;