const express=require("express");
const router=express.Router();
const stock=require("../controllers/stock.controller.js");

<<<<<<< HEAD
router.post('/submit',stock.submit);
=======
router.post('/StockOrder',stock.stockAdd);
>>>>>>> 6699ef03781a2ffd9cd80b7c39b2e1639d37db2a

module.exports = router;
