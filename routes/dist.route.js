const express = require("express");
const router = express.Router();
const dist = require("../controllers/dist.controller.js");

router.get('/all', dist.getAll)

module.exports = router;
 