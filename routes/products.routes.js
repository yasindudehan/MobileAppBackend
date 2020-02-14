const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller.js");

router.get('/product',product.getproduct);
router.post('/product',product.submit);
module.exports = router;