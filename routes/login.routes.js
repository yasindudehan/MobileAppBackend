const express=require("express");
const router=express.Router();
const login=require("../controllers/login.controller.js");
const validateCust = require("../validation/user.validation");

// router.post('/signUp',login.signUp);
router.post('/signIn',login.signIn);

module.exports = router;

