const express = require("express");
const router = express.Router();
const route = require("../controllers/route.controller.js");

router.post("/submit", route.submit);

module.exports = router;
 