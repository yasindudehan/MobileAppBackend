const express = require("express");
const router = express.Router();
const image = require("../controllers/image.controller.js");

router.post("/submit", image.submit);

module.exports = router;
 