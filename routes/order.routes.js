const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller.js");

router.post("/submit", order.submit);
router.get("/submit", order.getting);
router.get("/getId", order.findstockorder);
module.exports = router;
