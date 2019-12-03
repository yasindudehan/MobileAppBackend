const express=require("express");
const router=express.Router();
const stock=require("../controllers/login.controller.js");

router.post('/submit',login.submit);

module.exports = router;