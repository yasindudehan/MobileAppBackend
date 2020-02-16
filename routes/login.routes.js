const express = require("express");
const router = express.Router();
const login = require("../controllers/login.controller.js");

// router.post('/signUp',login.signUp);
router.post("/signIn", login.signIn);
router.post("/salesrep", login.repInfo);
router.post("/dist", login.distInfo);
module.exports = router;
