const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller.js");

router.post("/submit", order.submit);

module.exports = router;
