const express = require("express");
const router = express.Router();
const mail = require("../controllers/mail.controller.js");

router.post("/submit",mail.submit);

module.exports = router;
 