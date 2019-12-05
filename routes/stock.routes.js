const express=require("express");
const router=express.Router();
const stock=require("../controllers/stock.controller.js");

router.post('/StockOrder',stock.stockAdd);

module.exports = router;
