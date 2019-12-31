const express = require("express");
const router = express.Router();
const rep = require("../controllers/rep.controller.js");

router.get('/all', rep.getAll)

module.exports = router;
 